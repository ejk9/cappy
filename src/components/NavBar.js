import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Modal } from 'react-bootstrap';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const [showUserForm, setShowUserForm] = useState(false)

  const openUserForm = () => {
    setShowUserForm(prev => !prev)
  }


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CAPPY
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/create-room'
                className='nav-links'
                onClick={closeMobileMenu}>
                Create Room
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/join-room'
                className='nav-links'
                onClick={closeMobileMenu}>
                Join Room
              </Link>
            </li>

            <li>
              <Link
                to='/userform'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                Login or Sign Up
              </Link>
            </li>
          </ul>

          {button && <Button onClick={openUserForm} buttonStyle='btn--outline'>Login or Sign Up</Button>}
        </div>
        


      </nav>
    </>
  );
}

export default Navbar;
