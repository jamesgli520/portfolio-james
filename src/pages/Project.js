import React from 'react'
import { Link } from "react-router-dom"

export default function Project() {
  return (
  <div>  
    <div>
        <Link to="/">Back</Link>
    </div>
    <h1>Projects</h1>
    <div className='div-project'>
      <ul className='ul-project'>
        <li className='li-project'>
          <a  href='https://jamesgli520.github.io/Password-Generator/'>Random Password Generator 
            <span> JavaScript 82.4%, CSS 12.1%, HTML 5.5%</span>
          </a>
        </li>
        <li className='li-project'>
          <a  href='https://jamesgli520.github.io/Work-Day-Scheduler/'>Work Day Scheduler
          <span> JavaScript 48.6%, CSS 25.9%, HTML 25.5%</span>
          </a>
        </li>
        <li className='li-project'>
          <a  href='https://jamesgli520.github.io/Code-Quiz/'>Quiz Challenge
          <span> JavaScript 84.4%, CSS 8.2%, HTML 7.0%</span>
          </a>
        </li>
      </ul>
      
    
    </div>
  </div>
    
  )
}