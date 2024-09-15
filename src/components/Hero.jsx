import React from 'react'
import { FaFacebook, FaGithub,  FaInstagram,  FaLinkedin, } from "react-icons/fa";
import { FaMessage, FaXTwitter } from 'react-icons/fa6';
import { RiMailLine } from "react-icons/ri";
const Hero = () => {
  return (
    <section id='scet' className='h-max '>
      <div className='opens grid'>

        <div className="div flex">
          <div className="open_img ">
          <img src="public/assets/download.svg" alt="" />
          </div>
            <div className="open_text">
              <h3 className='text-2xl lg:text-4xl'>Hello,I'm</h3>
              <h1 className='text-3xl lg:text-4xl'>Gbohunmi Williams</h1>
              <h1 className='text-2xl lg:text-2xl'> VERSATILE FRONT-END DEVELOPER</h1>
            <button className='btn py-2.5  px-3 bg-yellow-300 '>Downlod Cv</button>
            <div>
          
             <div className="icons flex gap-5  ">
                <FaGithub size="1.8em" className='icon hover:scale-125 cursor-pointer'/>
                <FaLinkedin size="1.8em" className='icon hover:scale-125 cursor-pointer'/>
                <FaXTwitter size="1.8em" className='icon hover:scale-125 cursor-pointer'/>
                <FaFacebook size="1.8em" className='icon hover:scale-125 cursor-pointer'/>
                <FaInstagram size="1.8em" className='icon hover:scale-125 cursor-pointer'/>
                <RiMailLine size="1.8em" className='icon hover:scale-125 cursor-pointer'/>
             </div>
          </div>
          </div>     
                </div>

        <div className=' bg-slate-50 dummy shadow-md shadow-slate-300 h-max  p-4'>
          
        </div>
        </div>
      
      <div class="dev">
        <div className='box flex gap-11 justify-around'>
          <div className="boxs ann">1</div>
          <div className="boxs"></div>
          <div className="boxs"></div>
          <div className="boxs"></div>
          <div className="boxs"></div>
          <div className="boxs"></div>
        
        </div>

<div className="devv">
          <h1 className='text-center text-3xl my-16'>Development Dashboard</h1>
</div>
  </div>
 </section>
  )
}

export default Hero

// https://l.instagram.com/?u=https%3A%2F%2Ftopinns.netlify.app%2F&e=AT3Yk-YxFfJtu1J6SX3kM83z4kg9QOshhlUTvcbU8m8Fvt7r5doQ09ikNMWXoVMTtdAumI2iBGfEzeISgNH65GueoSC8mNVWOBUmwqk