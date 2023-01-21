import { useState } from 'react';
import './Header.scss';

type Props = {
  isLoggedIn: boolean;
}

export const Header: React.FC<Props> = ({
  isLoggedIn
}) => {

  return (
    <header className='header'>
      <p className='logo'>
        LOGO
      </p>

      <nav className='nav'>
        {!isLoggedIn ? (
          <p className='nav__signIn'>Sign in to see content </p>
        ) : (
          <ul className="nav__list">
            <li className="nav_item">
              <a href="#Home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="" className="nav__link">
                About Us
              </a>  
            </li>
            <li className="nav_item">
              <a href="" className="nav__link">
                Contacts
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};