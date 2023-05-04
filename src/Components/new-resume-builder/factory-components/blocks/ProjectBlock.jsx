import React, { useState } from 'react'
import Button from '../../../InputControl/Button'
import InputControl from '../../../InputControl/InputControl'

export default function ProjectBlock(props) {

    const [check, setCheck] = useState(true)
    const [title, setTitle] = useState(false)
    const [link, setLink] = useState(false)
    const [description, setDescription] = useState(false)

    const handleSubmit = () => {
        // console.log(title, link, description);
        if ([title, link, description].includes(false)) {
            setCheck(false);
            props.save(false)
        }
        else {
            setCheck(true);
            // props.setcomp(3)
            props.save(true)
            props.set([...props.data, { title, link, description }])
        }
    }

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-[100%] md:w-[48%] h-[80px]'><InputControl field="title" errmsg="invalid" isComp placeholder="abc creator" set={setTitle} /></div>
                <div className='w-[100%] md:w-[48%] h-[80px]'><InputControl field="link" errmsg="invalid" isComp placeholder="abc.github.com" set={setLink} /></div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-full min-h-[80px]'><InputControl type="textarea" field="description" isComp placeholder="description" set={setDescription} /></div>
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