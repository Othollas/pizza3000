import React from 'react'
import pizza from '../img/icon/pizza.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const Header = ({ icon }) => {

    const navigate = useNavigate();

    return (
        <div className="App-header">
            <div className="container">
                <div className="wrapper">

                <FontAwesomeIcon 
                icon={icon} 
                size="4x" 
                onClick={() => navigate(-1)}
                />
                
                    <img src={pizza} className='spinAnimation' alt="" />
                    <h1>Pizza Reeflex</h1>
                    <img src={pizza} className='spinAnimationInverted'alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header