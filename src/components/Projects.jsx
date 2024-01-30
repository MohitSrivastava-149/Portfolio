import React from 'react'
import ProjectItems from './ProjectItems'
import photo from '../assets/photo.jpg'
import photo2 from '../assets/photo2.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4 text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum temporibus, dolore culpa molestiae cum veniam voluptates sit fuga dolorem! Autem mollitia in aspernatur, ducimus est eum ipsa consequuntur illo!</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img='{photo}' title='Wheather App' />
            <ProjectItems img='{phto2}' title='Calculator' />
            <ProjectItems img='{photo}' title='ToDo List' />
            <ProjectItems img='{photo2}' title='caclccc' />
        </div>
    </div>
  )
}

export default Projects