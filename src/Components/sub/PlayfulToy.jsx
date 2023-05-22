import React from "react";
import { Link } from "react-router-dom";

const PlayfulToy = ({ category }) => {
  const { _id, photo, name, price, rating } = category;
  return (
    <div>
      <div className="max-w-lg card card-side bg-base-100 shadow-xl my-4">
        <>
          <img className="w-1/2" src={photo} alt="Movie" />
        </>
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

export default PlayfulToy;
