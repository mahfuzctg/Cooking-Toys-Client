import React from "react";
import { useLoaderData } from "react-router-dom";

const MyToys = () => {
  const toys = useLoaderData();
  return (
    <div>
      <h3>my toy : {toys.length}</h3>
    </div>
  );
};

export default MyToys;
