import { useState } from 'react';

type Props = {

}

export const SignForm: React.FC = () => {

  return (
    <form>
      <h1>Sign in here!</h1>

      Username: <input type="text" placeholder='username' />

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};