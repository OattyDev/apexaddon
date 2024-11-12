import React, { useState } from 'react'
import { FaBars, FaTimes} from  'react-icons/fa'
import "./Navbar.css"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <div className='container'>
        <h1>AP<span className='primary'>EX</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>Featured</a>
            </li>
            <li>
                <a href='/'>Earn</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
        </ul>
        
        <div className='btn-group'>
          <a href="../wallets/wallet">
            <button className='btn'>Connect Wallet</button>
          </a>  
        </div>

        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#333'}} />) : 
            (<FaBars size={20} style={{color: '#333'}}/>)}
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
