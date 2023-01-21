import { useState ,useEffect } from 'react';
import { SignForm } from '../SignForm'
import { MainPage } from '../MainPage';
import { Header } from '../Header';

import './App.scss';


export function App() {
  const [signedIn, setSignedIn] = useState(false);
  

  return (
    <div>
      <button
        onClick={() => setSignedIn(state => !state)}
      >
        LOG/OUT
      </button>
      <Header isLoggedIn={signedIn} />


      {/* Meniu */}
      {!signedIn ? (
        <SignForm />
        ) : (
        <MainPage />
      )}



    </div>
  );
}
