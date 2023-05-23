import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex justify-center items-center">
      <div className="my-10  text-center" id="error-page">
        <div className=" bg-cover bg-center">
          <img src="https://i.postimg.cc/K8SVGgzF/Error-img.jpg" />
        </div>
        <div className="text-center">
          <h1>
            <span>{status || 404}</span>
            {/* <i>{error.statusText || error.message}</i> */}
          </h1>
          <h1>{error?.message}</h1>
          <h1>Sorry! This page are currently unavailable: </h1>
          <Link
            className="btn btn-block bg-red-100 text-red-950  no-underline"
            to="/"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
