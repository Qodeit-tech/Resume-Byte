import React, { useRef, useState } from 'react'

const valid = (field, value) => {
  if (field === "Name" || field === "Summary" || field === "School" || field === "Degree" || field === "Discipline" || field === "Title" || field === "Organization" || field === "Position" || field === "Description") {
    if (value.length > 1) {
      return true;
    }
  }
  else if (field === "Email") {
    if (value.search("@") >= 0) {
      return true;
    }
  }
  else if (field === "Github" || field === "Linkedin" || field === "Link") {
    if (value === "") {
      return true;
    }
  }
  else if (field === "Mobile") {
    if (!isNaN(value)) {
      return true;
    }
  }
  else if (field === "Skills" || field === "Hobbies" || field === "Start Date" || field === "End Date") {
    return true
  }
  else if (field === "Marks") {
    if (!isNaN(value)) {
      return true;
    }
  }
  return false;
}

export default function InputControl(props) {

  const inputRef = useRef();
  const [correct, setCorrect] = useState(true)

  const handleInputChange = () => {
    let input = inputRef.current.value;
    if (!valid(props.field, input.trim())) {
      setCorrect(false)
      props.set(props.isComp ? false : "")
    }
    else {
      setCorrect(true)
      props.set(input)
    }
  }
  // console.log(width)
  return (
    <div className={`w-full h-full flex flex-col justify-between`}>
      <div className={`text-sm rounded-md flex items-center px-4 ${props.type === "textarea" ? "my-1" : ""}`}>
        <div className='text-stone-600'>{props.field || "field"}</div>
        <div className='text-red-600'>{props.isComp ? "*" : ""}</div>
      </div>
      <div className='w-[100%] h-[80%] z-1 flex flex-row justify-center items-center'>
        {props.type === "textarea" ?
          <textarea rows="4" placeholder={props.placeholder || "placeholder"} className={`w-full border-2 h-full bg-white ${correct ? "border-blue-300" : "border-red-500 active:border-6 my-2"} focus:outline-none rounded-md p-2`} ref={inputRef} onBlur={handleInputChange} />
          : <input type={props.type || "text"} placeholder={props.placeholder || "placeholder"} className={`w-full border-2 bg-white ${correct ? "border-blue-300" : "border-red-500 active:border-6"} focus:outline-none rounded-md p-2`} ref={inputRef} onBlur={handleInputChange} />


        }
      </div>
      <div className='h-[20%] px-4 text-[12px] text-red-400'>{!correct && props.errmsg}</div>
    </div>
  )
}

