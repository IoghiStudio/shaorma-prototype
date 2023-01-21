import { useState ,useEffect } from 'react';
import { SignForm } from '../SignForm'
import { MainPage } from '../MainPage';
import { Header } from '../Header';

import './App.scss';

export type Account = {
  username: string;
  email: string;
}


export function App() {
  const [signedIn, setSignedIn] = useState(true);
  const [account, setAccount] = useState({
    username: '',
    email: '',
  });

  
  const signIn = (acc: Account) => {
    setAccount(acc);
    setSignedIn(true);
  }

  return (
    <div>
      <button
        onClick={() => setSignedIn(state => !state)}
      >
        LOG/OUT
      </button>

      <Header isLoggedIn={signedIn} account={account} />

      {!signedIn ? (
        <SignForm signIn={signIn} />
        ) : (
        <MainPage />
      )}



    </div>
  );
}
