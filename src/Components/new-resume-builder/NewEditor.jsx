import React, { useState } from 'react'
import EducationDetails from './factory-components/EducationDetails';
import ExperienceDetails from './factory-components/Experience';
import PersonalDetails from './factory-components/PersonalDetails';
import Projects from './factory-components/Projects';
import Hobbies from './factory-components/Hobbies';
import TemplateSelectionPage from './TemplateSelectionPage';
import "./animation.css"


export default function NewEditor(props) {
    const sections = ["PersonalDetails", "EducationDetails", "Experience", "Projects", "Hobbies", "Template Selection"];

    const [component, setComponent] = useState(1);
    const [personal, setPersonal] = useState();
    const [education, setEducation] = useState();
    const [experience, setExperience] = useState();
    const [projects, setProjects] = useState();
    const [hobbies, setHobbies] = useState();
    const [summary, setSummary] = useState();

    return (
        <div className='w-full h-full flex flex-col justify-center items-center my-[4vh] md:mt-[8vh] forumfont'>
            <div className='mx-[1.5rem] text-[50px] my-4'>
                Resume Builder
            </div>
            <div className='w-[90%] md:w-[80%] flex flex-col justify-center items-center gap-y-5'>
                <div className='flex justify-between w-full'>
                    {
                        sections.map((val, i) => {
                            console.log(val)
                            console.log(i)
                            return (
                                <div className='w-1/6 flex justify-center gap-2' key={i} onClick={() => { if (i + 1 < component) { setComponent(i + 1) } }}>
                                    <div className={`px-2 md:px-8 py-2 ${component === i + 1 ? "bg-stone-200" : ""} rounded-lg hover:cursor-pointer`}>
                                        <div className={`w-[25px] h-[25px] ${component >= i + 1 ? "bg-blue-500" : "bg-stone-400"} text-white flex justify-center items-center rounded-[50%]`}>
                                            {i + 1}
                                        </div>
                                    </div>
                                </div>
                            )
                        })


                    }

                </div>
                <div className='w-full h-full border-2 border-stone-400 rounded-lg p-6'>
                    {/* <TemplateSelectionPage></TemplateSelectionPage> */}
                    {/* <EducationDetails setcomp={setComponent}></EducationDetails> */}
                    <div className={`${component === 1 ? "block" : "hidden"} animatedT`}>
                        <PersonalDetails setcomp={setComponent} setData={setPersonal} />
                    </div>
                    <div className={`${component === 2 ? "block" : "hidden"} animatedT`}>
                        <EducationDetails setcomp={setComponent} setData={setEducation}></EducationDetails>
                    </div>
                    <div className={`${component === 3 ? "block" : "hidden"} animatedT`}>
                        <ExperienceDetails setcomp={setComponent} setData={setExperience}></ExperienceDetails>
                    </div>
                    <div className={`${component === 4 ? "block" : "hidden"} animatedT`}>
                        <Projects setcomp={setComponent} setData={setProjects}></Projects>
                    </div>
                    <div className={`${component === 5 ? "block" : "hidden"} animatedT`}>
                        <Hobbies setcomp={setComponent} setData={setHobbies} setSummary={setSummary} />
                    </div>
                    <div className={`${component === 6 ? "block overflow-y-auto" : "hidden"} animatedT`}>
                        <TemplateSelectionPage setcomp={setComponent} submit={{ personal, education, experience, projects, hobbies, summary }} set={props.set} />
                    </div>
                </div>
            </div>
        </div>
    )
}
