import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='h1-Contact'>
      <div>
        <Link to='/'>Back</Link>
      </div>
      <h1 className='h1-Contact'>Contact</h1>
      
      <p>New Feature coming soon</p>
      
      <div className='div-contact'>
        <ul>
          <li>Email: "mailto.jamesgli@Gmail.com"</li>
          <li><a href='mailto: mailto.jamesgli@Gmail.com'>Click to Send an Email</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Contact