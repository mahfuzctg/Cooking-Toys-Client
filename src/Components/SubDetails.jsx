import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const SubDetails = ({ details }) => {
  // console.log(details);
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
            <tr className=" bg-red-100 text-red-950">
              {/* <th>1</th> */}
              <td>{name}</td>
              <td>{toy}</td>
              <td>{category}</td>
              <td>{price}</td>
              <td>{quantity}</td>

              <td>
                <button className="btn btn-block bg-red-100 text-red-950">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SubDetails;
