import React from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe';
import pdf from '../resume/ResumeJamesLi2022.pdf';

export default function Resume() {
    return (
        <div>

            <div>
                <Link to='/'>Back</Link>
            </div>
                
            <h1 className='h1-iframe'>Resume</h1>
            <div className='div-iframe'>
                    <Iframe src= {pdf} height="600px" width="80%" title='Resume in pdf' />
                
            </div>
            
        </div>
    )
}
