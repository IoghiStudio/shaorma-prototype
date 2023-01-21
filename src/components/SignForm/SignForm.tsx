import { useState } from 'react';
import { Account } from '../App';
import './SignForm.scss';

type Props = {
  signIn: (acc: Account) => void;
}

export const SignForm: React.FC<Props> = ({
  signIn
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form
      className='form'
      onSubmit={(event) => {
        event.preventDefault();

        if (username.length && email.length) {
          signIn({
            username,
            email,
          })
      }}
    }
    >

      <h1
        className='form__title'
      >
        Welcome shaorma
      </h1>

      <label htmlFor="username">
        Username: 
      </label>
      <input
        id='username'
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

      <br />

      <label htmlFor="email">
        Email: 
      </label>
      <input
        id='email'
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <br />

      <button
        className='form__submit'
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};