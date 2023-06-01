import React, { useState } from 'react'
import Button from '../../InputControl/Button'
import InputControl from '../../InputControl/InputControl'

export default function HobbiesDetails(props) {

    // const [check, setCkeck] = useState(false)
    const [check, setCheck] = useState(true)
    const [hobbies, setHobbies] = useState(false)
    const [summary, setSummary] = useState(false);

    const handleSubmit = () => {
        if ([hobbies, summary].includes(false)) {
            setCheck(false);
        }
        else {
            props.setData(hobbies.split(","))
            props.setSummary(summary)
            props.setcomp(6)
        }
    }
    const handleBack = () => {
        props.setcomp(4)
    }

    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='flex items-center justify-center text-[40px] md:mb-4'>
                Hobbies
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-full h-[80px]'><InputControl field="Hobbies" isComp placeholder="volleyball , football" set={setHobbies} /></div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-full min-h-[80px]'><InputControl type="textarea" field="Summary" isComp placeholder="Summary" set={setSummary} /></div>
            </div>


            <div className='w-full mt-8'>
                <div className='flex justify-between gap-x-8'>
                    <div onClick={handleBack}>
                        <Button text="Back" />
                    </div>
                    <div className='flex gap-x-8 w-[100px]' onClick={handleSubmit}>
                        <Button text="Next" />
                        <div className={`text-red-500 ${!check ? "block" : "hidden"} text-[12px]`}>Something is wrong</div>
                    </div>
                </div>
            </div>
        </div>
    )
}