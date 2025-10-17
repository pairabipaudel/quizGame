import React from 'react'
import quiz_logo from './img/quiz_logo.png'
import './Header.css'
const Header = () => {
  return (
    <div className='full_container_header'>
        <div className="left_side">
            <img className='quiz_logo' src={quiz_logo} alt="" />
            <p className="quiz_name">Quiz App</p>
        </div>
    </div>
  )
}

export default Header;
