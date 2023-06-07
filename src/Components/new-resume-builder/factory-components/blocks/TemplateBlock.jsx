import React from 'react'
import image from "../../resume-templates/template2-1.png"

export default function TemplateBlock(props) {
    return (
        <div className='w-full '>
            <div className='flex items-center justify-center w-full h-full p-4 rounded-md hover:bg-slate-300'>
                <img src={props.image || image} alt="" className='w-[90%] rounded-md border-[3px]' />
            </div>

        </div>
    )
}
