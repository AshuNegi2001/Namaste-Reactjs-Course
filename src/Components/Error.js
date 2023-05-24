import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const {status, statusText} = error; // Object destructuring...
  console.log(error);
  return (
    <>
      <div>
        <h1>Oops!something went wrong</h1>
        <h2>{status + ":" + statusText}</h2>
      </div>
    </>
  );
};

export default Error;
