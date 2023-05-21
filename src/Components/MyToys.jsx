import React, { useContext, useEffect, useState } from "react";

import { authContext } from "../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Header from "./Header";
import Footer from "./Footer";

const MyToys = () => {
  const { user } = useContext(authContext);
  const [mytoys, setMyToys] = useState([]);

  const url = `http://localhost:5000/addtoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  return (
    <div>
      <Header></Header>
      <div className="m-5">
        <h3 className="text-center glass rounded-xl text-red-950">
          Your Toy: {mytoys.length}
        </h3>
        {mytoys.map((myToy) => (
          <MyToysRow key={myToy._id} myToy={myToy}></MyToysRow>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyToys;
