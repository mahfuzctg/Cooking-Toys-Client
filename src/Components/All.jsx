import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";
import AddCard from "./AddCard";

const All = () => {
  const alls = useLoaderData();

  return (
    <div>
      <Header></Header>
      <h1 className="text-center glass rounded-xl text-red-950">
        All Toys: {alls.length}
      </h1>

      {alls.map((addCard) => (
        <AddCard key={addCard._id} addCard={addCard}></AddCard>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default All;
