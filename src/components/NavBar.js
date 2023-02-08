import React from 'react'
import '../App.css';


export default function NavBar() {
   
  return (
    <nav>
      <div>
        <ul className='Navbar'>
          <li><a href='./'>Home</a></li>
          <li><a href='./'>Project</a></li>
          <li><a href='./'>About</a></li> 
          <li><a href='./'>Contact</a></li>
        </ul>
      </div>
    </nav>
    
  );
};



