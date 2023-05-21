import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Providers/AuthProviders";

const MyToys = () => {
  const { user } = useContext(authContext);
  const [mytoys, setMytoys] = useState([]);

  const url = `http://localhost:5000/addtoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMytoys(data);
      });
  }, [url]);
  return (
    <div>
      <h3>my toy : {mytoys.length} </h3>
    </div>
  );
};

export default MyToys;
