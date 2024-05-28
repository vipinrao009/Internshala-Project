import React from 'react'
import Logo from '../../Assets/Logo.png'
const Header = () => {
  return (
    <div>
      <header className="App-header">
        <nav className="navbar">
          <div className="logo"><img src={Logo} alt="AI CERTs Logo" /></div> {/* Use the imported logo */}
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Certification</li>
            <li>Authorized Partners</li>
            <li>Resources</li>
            <li>AI CERTs Labs</li>
            <li>Store</li>
            <li>Contact</li>
          </ul>
          <button className="certify-button">Get Certified</button>
        </nav>
      </header>
    </div>
  )
}

export default Header
