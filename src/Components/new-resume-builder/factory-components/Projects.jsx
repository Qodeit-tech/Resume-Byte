import React, { useState } from 'react'
import Button from '../../InputControl/Button'
import InputControl from '../../InputControl/InputControl'
import ProjectBlock from './blocks/ProjectBlock'

export default function ProjectDetails(props) {

    // const [check, setCkeck] = useState(false)
    const [data, setData] = useState([])
    const [check, setCheck] = useState(true)
    const [saved, setSaved] = useState(false)

    const handleSubmit = () => {
        if (saved) {
            props.setData(data)
            props.setcomp(5)
            setCheck(true)
        }
        else {
            setCheck(false)
        }
    }
    const handleBack = () => {
        props.setcomp(3)
    }

    const [array, setArray] = useState([<ProjectBlock setcomp={props.setcomp} save={setSaved} data={data} set={setData} />])
    const addBlock = () => {
        setArray([...array, <ProjectBlock setcomp={props.setcomp} save={setSaved} data={data} set={setData} />])
        setSaved(false);
    }

    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='flex flex-col items-center justify-center text-[30px] md:mb-4'>
                Project Details
                <div className="text-[12px]">Hit Save !</div>
            </div>
            {
                array.map((ele, i) => {
                    return (
                        <div key={i}>
                            {ele}
                            <div className='w-full h-[1px] bg-slate-600 my-2'></div>
                        </div>
                    );
                })
            }
            <div className='w-full flex justify-center my-2'>
                <div className={`text-[20px] ${saved ? "block" : "hidden"}`} onClick={addBlock}><Button text="add"></Button></div>
            </div>
            <div className='w-full flex justify-between gap-x-8'>
                <div className='flex gap-x-8 w-[100px]' onClick={handleBack}>
                    <Button text="Back" />
                </div>
                <div className='flex flex-col ml-auto gap-x-8 ' onClick={handleSubmit}>
                    <Button text="Next " />
                    <div className={`text-red-500 ${!check ? "block" : "hidden"} text-[12px]`}>Something is wrong</div>
                </div>
            </div>
        </div>
    )
}