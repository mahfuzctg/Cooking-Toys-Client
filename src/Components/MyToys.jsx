import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Header from "./Header";
import Footer from "./Footer";
import dynamicTitle from "../dynamicHooks/DynamicTitle";

const MyToys = () => {
  dynamicTitle(`My Toys`);
  const { user } = useContext(authContext);
  const [mytoys, setMyToys] = useState([]);
  // const [deletings, setDeleting] = useState([]);
  console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/addtoys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  // const handleDelete = (id) => {
  //   const proceed = confirm("are you sure you want to delete?");
  //   if (proceed) {
  //     fetch(`http://localhost:5000/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((d) => {
  //         console.log(d);
  //         if (d.deletedCount > 0) {
  //           Swal.fire({
  //             icon: "success",
  //             title: "Thank You!",
  //             text: "Successfully Deleted!",
  //           });
  //           const remaining = mytoys.filter((mytoy) => mytoy._id !== id);
  //           setMyToys(remaining);
  //         }
  //       });
  //   }
  // };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addtoys/${user?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = mytoys.filter((mytoy) => mytoy._id !== id);
            setMyToys(remaining);
          });
      }
    });
  };

  return (
    <div>
      <Header></Header>
      <div className="m-5">
        <h3 className="text-center glass rounded-xl text-red-950">
          Your Toy: {mytoys.length}
        </h3>
        {mytoys.map((my) => (
          <MyToysRow
            key={my._id}
            my={my}
            handleDelete={handleDelete}
          ></MyToysRow>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyToys;
