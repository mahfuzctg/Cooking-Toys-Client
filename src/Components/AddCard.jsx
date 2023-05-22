import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProviders";
import dynamicTitle from "../dynamicHooks/DynamicTitle";

const AddCard = ({ addCard }) => {
  dynamicTitle(`Add Toys`);
  const { user } = useContext(authContext);
  const {
    _id,
    name,
    email,
    quantity,
    category,
    sale,
    toy,
    price,
    photo,
    rating,
  } = addCard;
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
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="w-9/12 bg-red-100 text-red-950">
              {/* <th>1</th> */}
              <td>{name}</td>
              <td>{toy}</td>
              <td>{category}</td>
              <td>{price}</td>
              <td>{quantity}</td>

              <td>
                <Link to={`/toydetail/${_id}`}>
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
