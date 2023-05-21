import React from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ myToy }) => {
  const { name, email, quantity, category, toy, sale, price, photo, rating } =
    myToy;
  return (
    <div>
      <div>
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className=" bg-red-950 text-rose-100">
              {/* <th>1</th> */}
              <th>User Photo</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className=" bg-red-100 text-red-950">
              {/* <th>1</th> */}
              <td className="text-center">
                <img
                  className="w-10 h-10 rounded-full text-center shadow-2xl bg-rose-950 p-1"
                  src={photo}
                  alt=""
                />
              </td>
              <td>{name}</td>
              <td>{toy}</td>
              <td>{category}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{rating}</td>
              <td>
                <Link to="/toyDetails">
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

export default MyToysRow;
