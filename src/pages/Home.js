import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { RxRocket } from 'react-icons/rx';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineFilePdf} from 'react-icons/ai';


export default function Home() {
  return (
  <div>
    <nav className='menu'>
      <ul >
        <li> <span className='james'>James</span></li>
      </ul>
      <ul>
        <li> <Link to="/contact">Contact</Link> </li>
        <li> <Link to="/About">About</Link></li>
      </ul>
      
      
      
    </nav>

    <div className='text'>
      <ul className='ul-home'>
        <li>Welcome</li>
        <li>Hello, This is James</li>
        <li>I am a Full Stack Developer</li>
        
      </ul> 
    </div>

    <div className='text'>
      <ul>
          <li> <Link to="/project"><button>View My Work</button></Link> </li>
      </ul>
    </div>

    <div className='RxRocket'> 
      <RxRocket/>
    </div> 

    <div className='footer'>
      <a className='iconSpin' href='https://github.com/jamesgli520' ><AiOutlineGithub/></a>
      <a className='iconSpin' href='https://www.linkedin.com/in/jamesguandgongli/' ><AiOutlineLinkedin/></a>
      <Link className='iconSpin' to="/resume"><AiOutlineFilePdf /></Link>
    </div>
    
    
  </div>
    
  )
}
