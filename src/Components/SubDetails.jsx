import React from "react";

const SubDetails = ({ detail }) => {
  const {
    name,
    email,
    quantity,
    category,
    sale,
    toy,
    price,
    photo,
    rating,
    description,
  } = detail;

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default SubDetails;
