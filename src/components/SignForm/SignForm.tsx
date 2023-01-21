import { useState } from 'react';
import './SignForm.scss';

type Props = {

}

export const SignForm: React.FC = () => {

  return (
    <form
      className='form'
      onSubmit={(event) => {
        event.preventDefault();

      }}
    >

      <h1
        className='form__title'
      >
        Welcome shaorma
      </h1>

      <label htmlFor="username">
        Username: 
      </label>
      <input type="text" />

      <br />

      <label htmlFor="email">
        Email: 
      </label>
      <input type="text" />

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