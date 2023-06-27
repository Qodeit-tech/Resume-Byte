import React, { useState } from 'react'
import Button from '../../../InputControl/Button'
import InputControl from '../../../InputControl/InputControl'

export default function SchoolBlock(props) {
    const [check, setCheck] = useState(true)
    const [school, setSchool] = useState(false)
    const [degree, setDegree] = useState(false)
    const [marks, setMarks] = useState(false)
    const [discipline, setDiscipline] = useState(false)
    const [startDate, setStartDate] = useState(false)
    const [endDate, setEndDate] = useState(false)

    const handleSubmit = () => {
        // console.log(school, degree, marks, discipline, startDate, EndDate);
        if ([school, degree, marks, discipline, startDate, endDate].includes(false) || new Date(startDate) > new Date(endDate)) {
            setCheck(false);
            props.save(false)
        }
        else {
            setCheck(true);
            // props.setcomp(3)
            props.save(true)
            props.set([...props.data, { school, degree, marks, discipline, startDate, endDate }])
        }
    }

    const closeModal = () => {
        setCheck(true)
    }

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-[100%] md:w-[23%] h-[80px]'><InputControl field="School" errmsg="invalid name" isComp placeholder="Eg. " set={setSchool} /></div>
                <div className='w-[100%] md:w-[23%] h-[80px]'><InputControl field="Degree" errmsg="invalid degree" isComp placeholder=" B-Tech " set={setDegree} /></div>
                <div className='w-[100%] md:w-[23%] h-[80px]'><InputControl field="Marks" errmsg="invalid marks" isComp placeholder="XX.XX%" set={setMarks} /></div>
                <div className='w-[100%] md:w-[23%] h-[80px]'><InputControl field="Discipline" errmsg="invalid" isComp placeholder="Discipline" set={setDiscipline} /></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-[100%] md:w-[47%] h-[80px]'><InputControl type="date" isComp field="Start Date" errmsg="invalid date" placeholder="dd-mm-yyyy" set={setStartDate} /></div>
                <div className='w-[100%] md:w-[47%] h-[80px]'><InputControl type="date" isComp field="End Date" errmsg="invalid date" placeholder="dd-mm-yyyy" set={setEndDate} /></div>
            </div>
            <div className='w-full'>
                <div className='w-[100px]' onClick={handleSubmit}>
                    <Button text="save" />
                </div>
                <div className={`text-red-500 ${!check ? "block" : "hidden"}`}>
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
                </div>
            </div>
        </>
    )
}
