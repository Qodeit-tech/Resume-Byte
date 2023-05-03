const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const pdf = require('html-pdf');
const { replace_1 } = require('./replace');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const crypto = require("crypto");
const sendEmail = require('./sendmail');
const PDFWatermark = require('pdf-watermark');
const fastify = require('fastify')();
const { Configuration, OpenAIApi } = require("openai");
const catchAsync = require('./catchAsync');

dotenv.config({ path: "./configure.env" })

process.on("uncaughtException", (err) => {
    console.log("uncaught exception.. shutting down");
    console.log("error", err);
    process.exit(1);
})

const app = express()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: '*'
}));

const server = app.listen(7000, () => {
    console.log("server has been started")
})

const createPdf = catchAsync(async (req, res, next) => {

    let data = req.body;
    let html;
    try {


        const openai = new OpenAIApi(configuration);

        const project_desc = `improve the following paragraph "${data.summary}"`;
        const optimized_project_desc = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: project_desc,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.5,
        });
        data.summary = optimized_project_desc.data.choices[0].text.trim();

        // Send descriptions to OpenAI API for optimization
        for (const project of data.experience) {
            const project_desc = `improve the following paragraph "${project.description}"`;
            const optimized_project_desc = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: project_desc,
                max_tokens: 100,
                n: 1,
                stop: null,
                temperature: 0.5,
            });
            // Update JSON data with optimized descriptions
            project.description = optimized_project_desc.data.choices[0].text.trim();
        }
        // // // For projects description
        for (const project of data.projects) {
            const project_desc = `improve the following paragraph "${project.description}"`;
            const optimized_project_desc = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: project_desc,
                max_tokens: 100,
                n: 1,
                stop: null,
                temperature: 0.5,
            });
            // Update JSON data with optimized descriptions
            project.description = optimized_project_desc.data.choices[0].text.trim();
        }
    } catch (error) {
        console.log("optimization failed", error)
    }

    try {



        html = replace_1(data, data.template)
        // console.log(html);
        let options = { printBackground: true, preferCSSPageSize: true, border: { top: "30px", bottom: "30px" } };
        pdf.create(html, options).toFile(`./resume/${req.body.personal.email}.pdf`, function (err, resp) {
            if (err) {
                return (next)
            }
            else {
                res.status(200).json({
                    status: "success",
                    data: {
                        id: req.body.personal.email
                    }
                })
            }
        });
    } catch (error) {
        console.log(error)
    }

})


const createWatermark = catchAsync(async (req, res, next) => {
    // const id = req.body.id
    await PDFWatermark({
        // pdf_path: `./resume/tanmay11.pdf`,
        pdf_path: `./resume/${req.body.id}.pdf`,
        text: "RESUMEBYTE",
        textOption: {
            diagonally: true,
            opacity: 0.2,
        },
        // output_dir: `./resume/tanmay11_watermark.pdf`
        output_dir: `./resume/${req.body.id}_watermark.pdf`
    });
    console.log("watermark added")
    await sendEmail({ filename: req.body.id + "_watermark", email: req.body.id })
    res.status(200).json({
        status: "success"
    })
})

const orderController = catchAsync(async (req, res, next) => {

    const instance = new Razorpay({ key_id: process.env.RAORPAY_KEY_ID, key_secret: process.env.RAORPAY_KEY_SECRET })
    const options = {
        amount: 1 * 100,  // amount in the smallest currency unit
        currency: "INR",
        // receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            console.log(err)
            return (next)
        }
        res.status(200).json({
            status: "success",
            order
        })
    });
})

const verifyController = catchAsync(async (req, res, next) => {


    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;


    const expectedSignature = crypto.createHmac('sha256', process.env.RAORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');
    const response = { "signatureIsValid": "false" }
    if (expectedSignature === req.body.response.razorpay_signature) {

        await sendEmail({ filename: req.body.id, email: req.body.id })
        res.status(200).json({
            status: "success",
            message: "sign valid"
        })
    }
    else {
        return (next)
    }



})

app.post("/createResume", createPdf);
app.post("/watermarkResume", createWatermark);
app.post("/orders", orderController)
app.post("/verify", verifyController)

app.all("*", (req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: "this route is not implemented on this server"
    })
})

app.use((err, req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: "Something went wrong"
    })
})

process.on("unhandledRejection", (err) => {
    console.log("unhandled rejection.. shutting down");
    console.log("error", err.name, err.message);
    server.close(() => {
        process.exit(1);
    })
})



