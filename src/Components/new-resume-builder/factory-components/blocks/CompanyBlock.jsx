import React, { useState } from 'react'
import Button from '../../../InputControl/Button'
import InputControl from '../../../InputControl/InputControl'

export default function CompanyBlock(props) {

    const [check, setCheck] = useState(true)
    const [organization, setOrganization] = useState()
    const [position, setPosition] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = () => {
        // console.log(organization, position, startDate, endDate, description);
        if ([organization, position, startDate, endDate, description].includes(false) || new Date(startDate) > new Date(endDate)) {
            setCheck(false);
            props.save(false)
        }
        else {
            setCheck(true);
            // props.setcomp(3)
            props.save(true)
            props.set([...props.data, { organization, position, startDate, endDate, description }])
        }
    }

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-[100%] md:w-[48%] h-[80px]'><InputControl field="Organization" errmsg="invalid" isComp placeholder="abc private limited" set={setOrganization} /></div>
                <div className='w-[100%] md:w-[48%] h-[80px]'><InputControl field="Position" errmsg="invalid" isComp placeholder="web developer" set={setPosition} /></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-[100%] md:w-[48%] h-[80px]'><InputControl type="date" isComp field="Start Date" errmsg="invalid date" placeholder="dd-mm-yyyy" set={setStartDate} /></div>
                <div className='w-[100%] md:w-[48%] h-[80px]'><InputControl type="date" isComp field="End Date" errmsg="invalid date" placeholder="dd-mm-yyyy" set={setEndDate} /></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-full min-h-[80px]'><InputControl type="textarea" field="Description" isComp placeholder="Description" set={setDescription} /></div>
            </div>
            <div className='w-full my-8'>
                <div className='w-[100px]' onClick={handleSubmit}>
                    <Button text="save" />
                </div>
                <div className={`text-red-500 ${!check ? "block" : "hidden"} text-[12px]`}>Something is wrong</div>
            </div>
        </>
    )
}
