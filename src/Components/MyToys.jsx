import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Header from "./Header";
import Footer from "./Footer";

const MyToys = () => {
  const { user } = useContext(authContext);
  const [mytoys, setMyToys] = useState([]);
  // const [deletings, setDeleting] = useState([]);
  console.log(user.email);
  useEffect(() => {
    fetch(`https://cooking-toys-server.vercel.app/addtoys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete?");
    if (proceed) {
      fetch(`https://cooking-toys-server.vercel.app/addtoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((d) => {
          console.log(d);
          if (d.deletedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Thank You!",
              text: "Successfully Deleted!",
            });
            const remaining = mytoys.filter((mytoy) => mytoy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="m-5">
        <h3 className="text-center glass rounded-xl text-red-950">
          Your Toy: {mytoys.length}
        </h3>
        {mytoys.map((myToy) => (
          <MyToysRow
            key={myToy._id}
            myToy={myToy}
            handleDelete={handleDelete}
          ></MyToysRow>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyToys;
