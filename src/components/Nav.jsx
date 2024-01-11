import React from 'react'
import Logo from '../../public/images/logo.png'
export default function Nav(){
    return(
        <nav>
            <img  className ="nav--logo" src={Logo} alt="logo Photo" />
        </nav>
    )
}