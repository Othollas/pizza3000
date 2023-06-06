import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = ( { icon , title , text , className, action}) => {
    return (
        <div className={className} onClick={action}>
            <FontAwesomeIcon icon={icon} size="4x"/>
            <hr />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Card