import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year : 2024,
        title : 'Java',
        details : 'Hackerrank Java Basic'
    },
    {
        year : 2023,
        title : 'SQL',
        details : 'Hackerrank SQL Basic'
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
                details = {item.details}
            />
        ))}
    </div>
  )
}

export default Work