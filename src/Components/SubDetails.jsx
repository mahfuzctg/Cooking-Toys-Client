import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProviders";

const SubDetails = ({ details }) => {
  const { user } = useContext(authContext);
  // console.log(details);
  const {
    name,
    email,
    quantity,
    category,
    toy,
    price,
    photo,
    rating,
    description,
  } = details;
  console.log(name);

  return (
    <>
      <Header></Header>
      <div className="">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className=" bg-red-950 text-rose-100">
              {/* <th>1</th> */}
              <th>User Photo</th>
              <th>Seller email</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Description</th>
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
              <td>{user.email}</td>
              <td>{name}</td>
              <td>{toy}</td>
              <td>{category}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{rating}</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SubDetails;
