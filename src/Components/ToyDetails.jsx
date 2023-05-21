import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const details = useLoaderData();

  return (
    <div>
      <h3>
        Details: {details.length} {details._id}
      </h3>
    </div>
  );
};

export default ToyDetails;
