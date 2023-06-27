import React, { useState } from 'react';
import Button from '../../../InputControl/Button';
import InputControl from '../../../InputControl/InputControl';

export default function CompanyBlock(props) {
    const [check, setCheck] = useState(true);
    const [organization, setOrganization] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setEndDate('present');
        } else {
            setEndDate('');
        }
    };

    const handleSubmit = () => {
        if (
            [organization, position, startDate, description].includes('') ||
            (endDate !== 'present' && new Date(startDate) > new Date(endDate))
        ) {
            setCheck(false);
            props.save(false);
        } else {
            setCheck(true);
            props.save(true);
            props.set([
                ...props.data,
                { organization, position, startDate, endDate, description },
            ]);
        }
    };

    const closeModal = () => {
        setCheck(true)
    }

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-[100%] md:w-[48%] h-[80px]">
                    <InputControl
                        field="Organization"
                        errmsg="invalid"
                        isComp
                        placeholder="ABC Pvt Ltd"
                        set={setOrganization}
                    />
                </div>
                <div className="w-[100%] md:w-[48%] h-[80px]">
                    <InputControl
                        field="Position"
                        errmsg="invalid"
                        isComp
                        placeholder="Web Developer"
                        set={setPosition}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-[100%] md:w-[48%] h-[80px]">
                    <InputControl
                        type="date"
                        isComp
                        field="Start Date"
                        errmsg="invalid date"
                        placeholder="dd-mm-yyyy"
                        set={setStartDate}
                    />
                </div>
                <div className="w-[100%] md:w-[48%] h-[80px]">
                    <InputControl
                        type="date"
                        isComp
                        field="End Date"
                        errmsg="invalid date"
                        placeholder="dd-mm-yyyy"
                        disabled={endDate === 'present'}
                        value={endDate !== 'present' ? endDate : ''}
                        set={setEndDate}
                    />
                    <div className='relative bottom-[0.5rem] '>
                        <input
                            type="checkbox"
                            checked={endDate === 'present'}
                            onChange={handleCheckboxChange}
                        />
                        <label className='ml-2'>Present</label>
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-3 items-center justify-between">
                <div className="w-full min-h-[80px]">
                    <InputControl
                        type="textarea"
                        field="Description"
                        isComp
                        placeholder="Description"
                        set={setDescription}
                    />
                </div>
            </div>
            <div className="w-full my-8">
                <div className="w-[100px]" onClick={handleSubmit}>
                    <Button text="Save" />
                </div>
                <div
                    className={`text-red-500 ${!check ? 'block' : 'hidden'}`}
                >
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
    );
}


