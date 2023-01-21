import { useState } from 'react';
import { Account } from '../App';
import './Header.scss';

type Props = {
  isLoggedIn: boolean;
  account: Account;
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
              <a href="#About" className="nav__link">
                About
              </a>  
            </li>
            <li className="nav_item">
              <a href="#Contact" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav_item">
              <a href="#Profile" className="nav__link">
                <div>
                  Profile
                </div>
              </a>
            </li>
            
          </ul>
        )}
      </nav>
    </header>
  );
};