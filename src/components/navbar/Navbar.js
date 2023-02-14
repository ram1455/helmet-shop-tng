import React from 'react'
import "./style-navbar.css"

import helmetLogo from "../../images/helmet-shop-tng.png"

export default function Navbar() {
  return (
    <nav>
        <img  className='logo' src={helmetLogo} alt="" />
        <h1 className='title'>HELMETSHOP TNG</h1>
    </nav>
  )
}
