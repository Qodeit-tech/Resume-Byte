import axios from 'axios';
import React from 'react'
import Button from '../InputControl/Button'
import TemplateBlock from './factory-components/blocks/TemplateBlock'
import { useState } from 'react';
import withoutWater from "./templates/template1.jpg"
import withWater from "./templates/watermark.jpg"



export default function Download(props) {
    const [showModal, setShowModal] = useState(false);


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
                    url: "https://qodeit1.southindia.cloudapp.azure.com/verify",
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

    const handlePayment = async (id) => {
        const amount = 1;
        await axios(
            {
                method: "POST",
                url: "https://qodeit1.southindia.cloudapp.azure.com/orders",
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
    const handleDownload = (id) => {
        axios({
            method: "POST",
            url: "https://qodeit1.southindia.cloudapp.azure.com/watermarkResume",
            data: { id }
        })
            .then((res) => {
                console.log(res.data);
                setShowModal(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='mt-[10vh] w-[90%] md:w-[80%] m-[auto]'>
            <div className='text-[30px] md:text-[40px] flex justify-center items-center my-4'>
                Your resume is ready!
            </div>
            <div className='flex flex-col items-center justify-around md:flex-row'>
                <div className='w-[80%] md:w-[30%] flex flex-col items-center justify-center'>
                    <TemplateBlock image={withWater} />
                    <div className='flex flex-col items-center my-2 gap-y-2'>
                        <div>download with watermark (free)</div>
                        <div onClick={() => handleDownload(props.id)}>
                            <Button text='download' />
                        </div>
                    </div>
                </div>
                <div className='w-[80%] md:w-[30%] flex flex-col items-center justify-center'>
                    <TemplateBlock image={withoutWater} />
                    <div className='flex flex-col items-center my-2 gap-y-2'>
                        <div>download without watermark (1rs)</div>
                        <div onClick={() => handlePayment(props.id)}>
                            <Button text='download' />
                        </div>
                    </div>
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
    );
}
