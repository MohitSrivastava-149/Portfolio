import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year : 2020,
        title : 'nalla',
        duration : '3 years',
        details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        year : 2024,
        title : 'Developer',
        duration : '3 years',
        details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Certificates</h1>
        {data.map((item, id) => (
            <WorkItem 
                key = {id} 
                year = {item.year} 
                title = {item.title} 
                duration = {item.duration} 
                details = {item.details}
            />
        ))}
    </div>
  )
}

export default Work