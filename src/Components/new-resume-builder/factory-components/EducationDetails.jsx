import React, { useState } from 'react'
import Button from '../../InputControl/Button'
import InputControl from '../../InputControl/InputControl'
import SchoolBlock from './blocks/SchoolBlock'

export default function EducationDetails(props) {

    // const [check, setCkeck] = useState(false)

    const [data, setData] = useState([])
    const [check, setCheck] = useState(true)
    const [saved, setSaved] = useState(false)


    const handleSubmit = () => {
        if (saved) {
            props.setData(data)
            props.setcomp(3)
            setCheck(true)
        }
        else {
            setCheck(false)
        }
    }
    const handleBack = () => {
        props.setcomp(1)
    }
    const removeBlock = (index) => {
        setArray(prevArray => {
            const updatedArray = [...prevArray];
            updatedArray.splice(index, 1);
            return updatedArray;
        });
    };
    const [array, setArray] = useState([<SchoolBlock setcomp={props.setcomp} save={setSaved} data={data} set={setData} />])
    const addBlock = () => {
        setArray([...array, <SchoolBlock setcomp={props.setcomp} save={setSaved} data={data} set={setData} />])
        setSaved(false);
    }

    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='flex flex-col items-center justify-center text-[30px] md:mb-4'>
                <div>Education Details</div>
                <div className="text-[12px]">Dont Forget To Hit Save!</div>
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
            <div className='w-full flex justify-between  my-3'>
                <div className={`text-[20px]  ${saved ? "block" : "hidden"}`} onClick={addBlock}><Button text="add"></Button></div>
                <div className={`text-[20px]  ${saved ? "block" : "hidden"}`} onClick={removeBlock}><Button text="remove"></Button></div>
            </div>
            <div className='w-full flex justify-between gap-x-8'>
                <div className='flex gap-x-8 w-[100px]' onClick={handleBack}>
                    <Button text="Back" />
                </div>l
                <div className='flex flex-col items-center justify-center igap-x-8 ' onClick={handleSubmit}>
                    <Button text="Next" />
                    <div className={`text-red-500 ${!check ? "block" : "hidden"} text-[12px]`}>Something is wrong</div>
                </div>
            </div>
        </div>
    )
}