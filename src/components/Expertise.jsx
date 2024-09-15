import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa"; 
import { FaReact } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
const Expertise = () => {
  return (
      <section>
       <h1 className='text-4xl text-center font-bold'>Expertise</h1>
          <br />
          <br />
      <div className="grid grid-cols-3 place-items-center gap-12">
        <div className="ex">
          <FaHtml5 size="4.5em"/>
              </div>
        <div className="ex">
          <FaCss3Alt size="4.5em"/>
              </div>
        <div className="ex">
          <FaJs size="4.5em"/>
              </div>
        <div className="ex">
          <FaReact size="4.5em"/>
              </div>
        <div className="ex">
          <FaGithub size="4.5em"/>
              </div>
        <div className="ex">
          <SiTailwindcss size="4.5em"/>
              </div>
        <div className="ex">
          <SiTypescript size="4.5em"/>
              </div>
          </div>
    </section>
  )
}

export default Expertise;