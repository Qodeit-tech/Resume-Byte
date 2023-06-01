import React, { useState } from 'react'
import Button from '../../InputControl/Button'
import InputControl from '../../InputControl/InputControl'
import CompanyBlock from './blocks/CompanyBlock'

export default function ExperienceDetails(props) {

    // const [check, setCkeck] = useState(false)
    const [data, setData] = useState([])
    const [check, setCheck] = useState(true)
    const [saved, setSaved] = useState(true)

    const handleSubmit = () => {
        if (saved) {
            props.setData(data)
            props.setcomp(4)
            setCheck(true)
        }
        else {
            setCheck(true)
        }
    }
    const handleBack = () => {
        props.setcomp(2)
    }

    const [array, setArray] = useState([<CompanyBlock setcomp={props.setcomp} save={setSaved} data={data} set={setData} />])
    const addBlock = () => {
        setArray([...array, <CompanyBlock setcomp={props.setcomp} save={setSaved} data={data} set={setData} />])
        setSaved(false);
    }

    const removeBlock = (index) => {
        setArray(prevArray => {
            const updatedArray = [...prevArray];
            updatedArray.splice(index, 1);
            return updatedArray;
        });
    };
    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='flex items-center justify-center text-[30px] md:mb-4'>
                Experience Details
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
            <div className='w-full flex justify-between my-3'>
                <div className={`text-[20px] ${saved ? "block" : "hidden"}`} onClick={addBlock}><Button text="Add"></Button></div>
                <div className={`text-[20px] ${saved ? "block" : "hidden"}`} onClick={removeBlock}><Button text="Remove"></Button></div>
            </div>

            <div className='w-full flex justify-between gap-x-8'>
                <div className='flex gap-x-8 w-[100px]' onClick={handleBack}>
                    <Button text="Back" />
                </div>
                <div className='flex flex-col gap-x-8 ' onClick={handleSubmit}>
                    <Button text="Next" />
                    <div className={`text-red-500 ${!check ? "block" : "hidden"} text-[12px]`}>Something is wrong</div>
                </div>
            </div>
        </div>
    )
}