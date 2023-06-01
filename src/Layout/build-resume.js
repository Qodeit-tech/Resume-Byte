// import React from 'react';

// const FormExample6 = () => {
//   return (
//     <div className="relative flex flex-col justify-center ">
//       <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-blue-600/40 ring-2 ring-blue-600 lg:max-w-xl overflow-y-scroll">
//         <h1 className="text-3xl font-semibold text-center text-blue-700 underline uppercase decoration-wavy">
//           Contact Form
//         </h1>
//         <form className="mt-6">
//           <div className="mb-2">
//             <label>
//               <span className="text-gray-700">Your name</span>
//               <input
//                 type="text"
//                 name="name"
//                 className="
//             w-full
//             block px-16 py-2 mt-2
//             border-gray-300
//             rounded-md
//             shadow-sm
//             focus:border-blue-300
//             focus:ring
//             focus:ring-blue-700
//             focus:ring-opacity-50
//           "
//                 placeholder="Gaurang Biyani"
//               />
//             </label>
//           </div>
//           <div className="mb-2">
//             <label>
//               <span className="text-gray-700">Email address</span>
//               <input
//                 name="email"
//                 type="email"
//                 className="
//             block
//             w-full
//             mt-2 px-16 py-2
//             border-gray-300
//             rounded-md
//             shadow-sm
//             focus:border-blue-300
//             focus:ring
//             focus:ring-blue-200
//             focus:ring-opacity-50
//           "
//                 placeholder="abc@example.com"
//                 required
//               />
//             </label>
//           </div>
//           <div className="mb-2">
//             <label>
//               <span class="text-gray-700">Your Description </span>
//               <textarea
//                 name="message"
//                 className="
//             block
//             w-full
//             mt-2 px-16 py-8
//             border-gray-300
//             rounded-md
//             shadow-sm
//             focus:border-blue-300
//             focus:ring
//             focus:ring-blue-200
//             focus:ring-opacity-50
//           "
//                 rows="5"
//               ></textarea>
//             </label>
//           </div>

//           <div class="mb-6">
//             <button
//               type="submit"
//               className="
//             h-10
//             px-5
//             text-blue-100
//             bg-blue-700
//             rounded-lg
//             transition-colors
//             duration-150
//             focus:shadow-outline
//             hover:bg-blue-800
//           "
//             >
//               Next
//             </button>
//           </div>
//           <div></div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormExample6;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FormExample6() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    City: '',
    state: '',
    contact:'',
    college: '',
    school:'',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: ''
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.contact &&state.batch && state.state) {
      setFormNo(formNo + 1)
      toast.success('success')
    }
    else if (formNo === 2 && state.school  && state.college && state.session && state.address) {
      setFormNo(formNo + 1)
      toast.success('success')
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success('form submit success')
    } else {
      toast.error('Please fillup all input field')
    }
  }
  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card mt-[80px] w-[470px] rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center capitalize`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="name">Name</label>
              <input value={state.name} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md capitalize' type="text" name='name' placeholder='Name' id='name' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="dept">City</label>
              <input value={state.dept} onChange={inputHandle} className='p-2 border capitalize border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='dept' placeholder='City' id='city' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="dept">State</label>
              <input value={state.state} onChange={inputHandle} className='p-2 border capitalize border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='state' placeholder='State' id='state' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="dept">Contact No</label>
              <input value={state.contact} onChange={inputHandle} className='p-2 border capitalize border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='contact' placeholder='Contact No ' id='contact' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="batch">Batch</label>
              <input value={state.batch} onChange={inputHandle} className='p-2 border capitalize border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='batch' placeholder='Batch' />
            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full capitalize  text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="school">School</label>
              <input value={state.school} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='school' placeholder='School name' id='school' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="college">College</label>
              <input value={state.college} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='college' placeholder='College name' id='college' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="session">session</label>
              <input value={state.session} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='session' placeholder='session' id='session' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="address">Address</label>
              <textarea value={state.address} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='address' placeholder='address' ></textarea>
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="district">District</label>
              <input value={state.district} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='district' placeholder='district name' id='district' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="thana">Thana</label>
              <input value={state.thana} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='thana' placeholder='thana' id='thana' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="post">Post</label>
              <input value={state.post} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='post' placeholder='post' id='post' />
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default FormExample6;