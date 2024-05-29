import React from 'react'
import project1 from './project1.jpg'
import project2 from './project2.jpg'
import project3 from './project3.jpg'
import project4 from './project4.jpg'
import project5 from './project5.jpg'
import project6 from './project6.jpg'


function Projects() {
  return (
    <div><br />
      <div style={{display:'flex',justifyContent:'space-evenly',padding:'20px'}}>
        <img className='projectImage' src={project1} alt="" srcset="" />
        <img className='projectImage' src={project2} alt="" srcset="" />
        <img className='projectImage' src={project3} alt="" srcset="" />
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',padding:'20px'}}>
        <img className='projectImage' src={project4} alt="" srcset="" />
        <img className='projectImage' src={project5} alt="" srcset="" />
        <img className='projectImage' src={project6} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Projects
