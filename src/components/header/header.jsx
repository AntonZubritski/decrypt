import React from 'react'
import './header.scss'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="logo-text">Edward Decrypt</div>
    </div>
  )
}
export default Header
