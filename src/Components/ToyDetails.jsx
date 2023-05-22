import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProviders";
import { useLoaderData, useParams } from "react-router-dom";
import SubDetails from "./SubDetails";

const ToyDetails = () => {
  const { id } = useParams();
  const { user } = useContext(authContext);
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://cooking-toys-server.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  // console.log(details);
  return (
    <div>
      {/* {details.map((d) => console.log(d))} */}
      {<SubDetails details={details}></SubDetails>}
    </div>
  );
};

export default ToyDetails;
