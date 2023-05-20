import React from "react";
import { Link } from "react-router-dom";

const AddCard = ({ addCard }) => {
  const { name, email, quantity, category, sale, toy, price, photo } = addCard;
  return (
    <div>
      <div className="">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className=" bg-red-950 text-rose-100">
              {/* <th>1</th> */}
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className=" bg-red-100 text-red-950">
              {/* <th>1</th> */}
              <td>{name}</td>
              <td>{toy}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>
                <Link>
                  <button className="btn btn-block bg-red-100 text-red-950">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCard;
