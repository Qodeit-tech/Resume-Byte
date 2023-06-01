import React, { useState } from 'react';
import Button from '../../InputControl/Button';
import InputControl from '../../InputControl/InputControl';

export default function PersonalDetails(props) {
    const [check, setCheck] = useState(true);
    const [email, setEMail] = useState(false);
    const [name, setName] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [github, setGithub] = useState(true);
    const [linkedin, setLinkedin] = useState(true);
    const [skills, setSkills] = useState(false);

    const handleSubmit = () => {
        if ([name, email, mobile, github, linkedin, skills].includes(false)) {
            setCheck(false);
        } else {
            setCheck(true);
            props.setData({ name, email, mobile, github, linkedin, skills });
            props.setcomp(2);
        }
    };

    console.log(name)
    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='flex items-center justify-center text-[30px] md:mb-4'>
                Personal Details
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-[100%] md:w-[30%] h-[80px]'>
                    <InputControl
                        field='Name'
                        errmsg='invalid name'
                        isComp
                        placeholder='Your Name'
                        set={setName}
                    />
                </div>
                <div className='w-[100%] md:w-[30%] h-[80px]'>
                    <InputControl
                        field='Email'
                        errmsg='invalid email'
                        isComp
                        placeholder='Email@gmail.com'
                        set={setEMail}
                    />
                </div>
                <div className='w-[100%] md:w-[30%] h-[80px]'>
                    <InputControl
                        field='Mobile'
                        errmsg='invalid number'
                        isComp
                        placeholder='xxxxxxxxxx'
                        set={setMobile}
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='w-[100%] md:w-[47%] h-[80px]'>
                    <InputControl
                        field='Github'
                        errmsg='invalid link'
                        placeholder='https://github.com/yourname'
                        set={setGithub}
                    />
                </div>
                <div className='w-[100%] md:w-[47%] h-[80px]'>
                    <InputControl
                        field='Linkedin'
                        errmsg='invalid link'
                        placeholder='https://linkedin.com/yourname'
                        set={setLinkedin}
                    />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-full h-[80px]'>
                    <InputControl
                        field='Skills'
                        isComp
                        placeholder='node.js ,reactjs ,git ,blender'
                        set={setSkills}
                    />
                </div>
            </div>

            <div className='w-full'>
                <div className='w-[100px]' onClick={handleSubmit}>
                    <Button text='Next' />
                </div>
                <div
                    className={`text-red-500 ${!check ? 'block' : 'hidden'} text-[12px]`}
                >
                    Something is wrong
                </div>
            </div>
        </div>
    );
}
