import React from 'react';
import './Risktech.css';
import logo from './assets/logorisktech 1.png'
import { Link } from 'react-router-dom';


function Headers() {
  return (
    <div className='headx'>
       <div className='headx1'><div className='link'><Link to="/">Home</Link></div></div>
       <div className='headx1'><a href='#'>Who we are</a></div>
       <div className='headx1'><div className='link'><Link to="/what-we-do">What we do</Link></div></div>
       <div className='headx1'><a href='#'>Training</a></div>
       <div className='headx1'><a href='#'>Contact</a></div>
       <div className='headx1'><a href='#'>Cart</a></div>
       <div className='headxL'><img src={logo} alt='logo'/></div>
    </div>
  )
}

export default Headers
