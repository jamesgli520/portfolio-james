import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../image/James-Photo.jpg'
import { RxRocket } from 'react-icons/rx';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineFilePdf} from 'react-icons/ai';

export default function About() {
  return (
    <div >
        <div><Link to="/">Back</Link></div>
        <div className='div-about'>
            <div>
                <img  src={photo} title='James'></img>
            </div>
            <div className='text-div'>
                <p>One year of work experience in IT Security. </p>
                <p>Coding experience in Java Language, HTML</p> 
                <p>and JavaScript. </p>
                <p>No work experience.</p>
                <p>Looking for entry level position.</p>
                <p>For more information, please visit my LinkedIn</p>
               
            </div> 

            <div className='footer'>
                <a className='iconSpin' href='https://github.com/jamesgli520' ><AiOutlineGithub/></a>
                <a className='iconSpin' href='https://www.linkedin.com/in/jamesguandgongli/' ><AiOutlineLinkedin/></a>
                <Link className='iconSpin' to="/resume"><AiOutlineFilePdf /></Link>
            </div>
        </div>
        
    </div>
    
  )
}
