import React, { useState } from 'react'
import Button from '../InputControl/Button'
import TemplateBlock from './factory-components/blocks/TemplateBlock'
import axios from 'axios'
import { Link } from 'react-router-dom'
import template1 from "./templates/template1.png"
import template2 from "./templates/template2.png"
import template3 from "./templates/template3.png"
import template4 from "./templates/template4.png"
import loader from "./loader.gif"
// import pdf from 'html-pdf'

const templates = [template1, template2, template3, template4]

export default function TemplateSelectionPage(props) {

    const [template, setTemplate] = useState()
    const [loading, setLoading] = useState(false)
    const [generated, setGenerated] = useState(false)
    const [check, setCheck] = useState(true)
    const handleSubmit = async () => {
        if (template) {
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
                setGenerated(true)
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
                loading ? <div className='flex flex-col justify-center items-center gap-4'>
                    <div> creating resume ! please wait</div>
                    <div><img src={loader} alt="loader" /></div>
                </div> :
                    <div className={`w-full h-full flex flex-col justify-center gap-y-4 ${generated ? "hidden" : "block"}`}>
                        <div className='text-[40px] w-full text-center'>
                            choose a template
                        </div>
                        <div className='flex flex-col md:flex-row w-full justify-evenly items-center gap-y-4 flex-wrap'>
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
                        <div className='w-full flex justify-between gap-x-8'>
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
        </div>
    )
}
