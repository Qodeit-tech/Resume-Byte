import React, { useState } from 'react'
import Button from '../../InputControl/Button'
import InputControl from '../../InputControl/InputControl'
import CompanyBlock from './blocks/CompanyBlock'

export default function ExperienceDetails(props) {

    // const [check, setCheck] = useState(false)
    const [data, setData] = useState([])
    const [check, setCheck] = useState(true)
    const [saved, setSaved] = useState(false)

    const [modal, setModal] = useState(true)
    const handleSubmit = () => {
        if (saved) {
            props.setData(data)
            props.setcomp(4)
            setCheck(false)
        }
        else {
            setCheck(true)
            props.setcomp(4)
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

    const closeModal = () => {
        setModal(false)
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
            <div className='flex items-center justify-center text-[30px]'>
                Experience Details
            </div>
            <div className="text-[18px] text-center md:mb-4">
                Click <b> Next </b> to Skip
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
            <div className='w-full flex justify-between border-b-[1px] pb-3 border-black my-2'>
                <div className={`text-[16px] ${saved ? "block" : "hidden"}`} onClick={addBlock}><Button text="Add"></Button></div>
                <div className={`text-[16px] bg-grey-400 ${saved ? "block" : "hidden"}`} onClick={removeBlock}><Button text="Remove"></Button></div>
            </div>

            <div className='w-full flex justify-between gap-x-8'>
                <div className='flex gap-x-8 w-[100px]' onClick={handleBack}>
                    <Button text="Back" />
                </div>
                <div className='flex flex-col gap-x-8 ' onClick={handleSubmit}>
                    <Button text="Next" />
                    {/* <div className={`text-red-500 ${modal ? "block" : "hidden"}`}>
                        {
                            <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
                                <div className='p-8 bg-white rounded-md'>
                                    <div className='mb-4 text-2xl font-bold'>There Was An Error</div>
                                    <div className='text-center text-md'>
                                        Check If u Saved , Or If you have entered your details properly
                                        (Make Sure Dates Are in right order)
                                    </div>
                                    <div className='flex justify-center mt-4' onClick={closeModal} >
                                        <Button text='Close' />
                                    </div>
                                </div>

                            </div>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}