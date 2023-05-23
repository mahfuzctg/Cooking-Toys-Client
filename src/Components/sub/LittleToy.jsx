import React from "react";
import { Link } from "react-router-dom";

const LittleToy = ({ category }) => {
  console.log(category);
  const { _id, photo, name, price, rating } = category;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p>{rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/toydetail/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleToy;
