import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="my-10 " id="error-page">
      <div className=" bg-cover bg-center">
        <img src="https://i.postimg.cc/K8SVGgzF/Error-img.jpg" />
      </div>
      <h1>
        <i>{error.statusText || error.message}</i>
      </h1>
      <h1>
        Sorry! This page are currently unavailable:{" "}
        <Link className=" no-underline" to="/">
          Go Back
        </Link>
      </h1>
    </div>
  );
};

export default Error;
