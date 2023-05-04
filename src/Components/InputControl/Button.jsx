import React from 'react'

export default function Button(props) {
    return (
        <div className={`min-w-[100px] px-4 h-[30px] ${props.disabled ? "bg-stone-400" : "bg-blue-500 cursor-pointer"} text-white flex justify-center items-center rounded-lg `}>
            {props.text}
        </div>
    )
}
