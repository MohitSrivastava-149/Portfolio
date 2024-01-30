import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

const main = () => {
  return (
    <div id='main' >
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1592806101136-d1fc03eb5ae3?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Mohit Srivastava</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
            <TypeAnimation
              sequence={[
                'Developer',
                2000, //wait for 2 sec
                'Coder',
                2000,
                'Copy paste pro',
                2000,
                ' to baitha hai rab ke bharose',
                2000
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px'}}
              repeat={Infinity}
            />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <FaLinkedin className='cursor-pointer' size={20}/>
              <FaInstagram className='cursor-pointer' size={20}/>
              <FaGithub className='cursor-pointer' size={20}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default main