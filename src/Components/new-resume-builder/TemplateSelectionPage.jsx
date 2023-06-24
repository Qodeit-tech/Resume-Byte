import React, { useState } from 'react'
import Button from '../InputControl/Button'
import TemplateBlock from './factory-components/blocks/TemplateBlock'
import axios from 'axios'
import { Link } from 'react-router-dom'
import template1 from "./templates/template1.jpg"
import template2 from "./templates/template2.jpg"
import template3 from "./templates/template3.jpg"
import template4 from "./templates/template4.jpg"
import loader from "./loader.gif"
// import pdf from 'html-pdf'

const templates = [template1, template2, template3, template4]

export default function TemplateSelectionPage(props) {

    const [template, setTemplate] = useState()
    const [loading, setLoading] = useState(false)
    const [generated, setGenerated] = useState(false)
    const [generated1, setGenerated1] = useState(false)
    const [check, setCheck] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState();


    const handleOpenRazorPay = (order, id) => {
        const options = {
            key: "rzp_test_QDoWkriK00mgyb", // Enter the Key ID generated from the Dashboard
            // key: "rzp_test_hCyWsBSF5NbM04", // Enter the Key ID generated from the Dashboard
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
                    url: "https://resume-byte-backend.onrender.com/verify",
                    data: {
                        response, id
                    }
                }).then((res) => {
                    console.log("payment done")
                    setShowModal(true)

                }).catch(() => {
                    console.log("payment error")
                })
            }
        }
        const razorPay = new window.Razorpay(options)
        razorPay.open()
    }

    const handlePayment = async () => {
        const amount = 1;
        await axios(
            {
                method: "POST",
                url: "https://resume-byte-backend.onrender.com/orders",
                // apikey:"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",
                data: { amount }
            }).then((res) => {
                console.log(res)
                const order = res.data.order
                console.log(order)
                handleOpenRazorPay(order, id)
            }).catch((err) => {
                console.log(err);
            })

    }


    const closeModal = () => {
        setShowModal(false);
    };


    const handleSubmit = async () => {
        if (template === 1 || template === 2) {
            setCheck(true)
            console.log({ ...props.submit, template })
            try {
                setLoading(true);
                const res = await axios(
                    {
                        method: "POST",
                        url: "https://resume-byte-backend.onrender.com/createResume",
                        data: { ...props.submit, template }
                    })
                props.set(res.data.data.id)
                console.log(res.data.data.id)
                setId(res.data.data.id)
                setGenerated(true)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setCheck(false)
            }
        }
        else if (template === 3 || template === 4) {
            setCheck(true)
            console.log({ ...props.submit, template })
            try {
                setLoading(true);
                const res = await axios(
                    {
                        method: "POST",
                        url: "https://resume-byte-backend.onrender.com/createResume",
                        data: { ...props.submit, template }
                    })
                props.set(res.data.data.id)
                console.log(res.data.data.id)

                setId(res.data.data.id)
                setGenerated1(true)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setCheck(false)
            }

        }
        else {
            setCheck(false)
        }
    }
    const handleBack = () => {
        props.setcomp(5)
    }
    return (
        <div>

            {
                loading ? <div className='flex flex-col items-center justify-center gap-4'>
                    <div> creating resume ! please wait</div>
                    <div><img src={loader} alt="loader" /></div>
                </div> :
                    <div className={`w-full h-full flex flex-col justify-center gap-y-4 ${generated ? "hidden" : "block"}`}>
                        <div className='text-[40px] w-full text-center'>
                            | 1 & 2 - Non ATS | Choose a Template | 3 & 4 ATS Compatible |
                        </div>
                        <div className='flex flex-col flex-wrap items-center w-full md:flex-row justify-evenly gap-y-4'>
                            {
                                templates.map((tem, i) => {
                                    return (
                                        <div className={`w-full md:w-[30%] rounded-lg ${i + 1 === template ? "border-[3px] border-green-400" : ""}`} key={i} onClick={
                                            () => (setTemplate(i + 1))
                                        }><TemplateBlock image={tem}></TemplateBlock></div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex justify-between w-full gap-x-8'>
                            <div className='flex gap-x-8 w-[100px]' onClick={handleBack}>
                                <Button text="back" />
                            </div>

                            <div className='flex flex-col gap-x-8 ' onClick={handleSubmit}>

                                <Button text="submit" />
                                <div className={`text-red-500 ${!check ? "block" : "hidden"} text-[12px]`}>Something is wrong</div>
                            </div>

                        </div>
                    </div>
            }
            <div className={`w-full flex justify-center ${generated ? "block" : "hidden"}`}>
                <div>
                    <Link to={"/download"}>
                        <Button text="go to download" />
                    </Link>
                </div>
            </div>
            <div className={`w-full flex justify-center ${generated1 ? "block" : "hidden"}`}>
                <div onClick={handlePayment} className='mt-2'>
                    <Button text="Download Now" />
                </div>
            </div>
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
                    <div className='p-8 bg-white rounded-md'>
                        <div className='mb-4 text-2xl font-bold'>Email Sent!</div>
                        <div className='text-center'>
                            Your resume has been Sent to you successfully.
                        </div>
                        <div className='flex justify-center mt-4' onClick={closeModal} >
                            <Button text='Close' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
