import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiGoogletagmanager } from 'react-icons/si'

const Skill = () => {
  return (
      <section>
          <h1 className='text-3xl text-center font-bold text-blue-900'>
              My SkillSet
          </h1>
          <br />


          <div className='dd cards grid grid-cols-2 p-5 gap-10'>
              <div className=" rounded-2xl  text-center p-5 shadow-xl max-w-3xl">
                <div className="header flex gap-4 justify-center ">
                    <div className="ilst">
                  <FaReact size="2em"/>
                    </div>
                    <div className="head-text">
Lorem ipsumuam fugiat?
                      </div>
                      <br />
                </div>
                <div className="head-descp">
                   id iusto eaque labore omnis doloremque delectus perferendis ad blanditiis inventore eveniet impedit.
                </div>
              </div>


              <div className=" rounded-xl text-center p-5 shadow-xl m-w-3xl">
                <div className="header flex gap-4 justify-center">
                    <div className="ilst">
<SiGoogletagmanager size="2em"/>
                    </div>
                    <div className="head-text">
                    Lorem ipsumuam fugiat?
                      </div>
                      <br />
                </div>
                <div className="head-descp">
                   id iusto eaque labore omnis doloremque delectus perferendis ad blanditiis inventore eveniet impedit.
                </div>
              </div>


              <div className=" rounded-xl shadow-xl p-5 grid col-span-2 text-center ">
                <div className="header  flex gap-4 justify-center ">
            <div className="ilst">
              <SiGoogletagmanager size="2em"/>
                    </div>
                    <div className="head-text">
dicta odit possimus corporis aliquam accusantium sed quam fugiat?
                      </div>
                      <br />
                 
                </div>
                <div className="head-descp">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores repudiandae ab magnam animi numquam iste, cupiditate id iusto eaque labore omnis doloremque delectus perferendis ad blanditiis inventore eveniet impedit.
                </div>
              </div>


          </div>
    </section>
    
  )
}

export default Skill