import axios from 'axios';
import React from 'react'
import Button from '../InputControl/Button'
import TemplateBlock from './factory-components/blocks/TemplateBlock'
import { useState } from 'react';
import withoutWater from "./templates/template1.png"
import withWater from "./templates/watermark.png"

const handleOpenRazorPay = (order, id) => {
    const options = {
        key: "rzp_test_QDoWkriK00mgyb", // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: order.currency,
        name: "Qodeit",
        // "description": "Test Transaction",
        // "image": "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
            console.log(response)
            axios({
                method: "POST",
                url: "http://127.0.0.1:7000/verify",
                data: {
                    response, id
                }
            }).then((res) => {
                console.log("payment done")

            }).catch(() => {
                console.log("payment error")
            })
        }
    }
    const razorPay = new window.Razorpay(options)
    razorPay.open()
}

const handlePayment = async (id) => {
    const amount = 1;
    axios(
        {
            method: "POST",
            url: "http://127.0.0.1:7000/orders",
            // apikey:"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",
            data: { amount }
        }).then((res) => {
            // console.log(res.data.order)
            const order = res.data.order
            handleOpenRazorPay(order, id)
        }).catch((err) => {
            console.log(err);
        })

}

const handleDownload = (id) => {
    axios(
        {
            method: "POST",
            url: "http://127.0.0.1:7000/watermarkResume",
            // apikey:"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",
            data: { id }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err);
        })

}


export default function Download(props) {

    const [done, setDone] = useState(false)

    return (
        <div className='mt-[10vh] w-[90%] md:w-[80%] m-[auto]'>
            <div className='text-[30px] md:text-[40px] flex justify-center items-center my-4'>
                Your resume is ready !
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <div className='w-[80%] md:w-[30%] flex flex-col items-center justify-center'>
                    <TemplateBlock image={withWater}></TemplateBlock>
                    <div className='my-2 gap-y-2 flex flex-col items-center'>
                        <div>download with watermark {"(free)"}</div>
                        <div onClick={() => { handleDownload(props.id) }}>
                            <Button text={"download"} />
                        </div>
                    </div>
                </div>
                <div className='w-[80%] md:w-[30%] flex flex-col items-center justify-center'>
                    <TemplateBlock image={withoutWater}></TemplateBlock>
                    <div className='my-2 gap-y-2 flex flex-col items-center'>
                        <div>download without watermark {"(1rs)"}</div>
                        <div onClick={() => { handlePayment(props.id) }}>
                            <Button text={"download"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
