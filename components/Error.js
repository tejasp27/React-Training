import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>{err.status}</h1>
      <img src="https://i.insider.com/4f91aee3ecad04ee3500003d?width=700" alt="placeholder" />;
    </div>
  )
}

export default Error
