import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";
import AddCard from "./AddCard";
import dynamicTitle from "../dynamicHooks/DynamicTitle";

const All = () => {
  dynamicTitle(`All Toys`);
  const alls = useLoaderData();
  const [toys, setToys] = useState(alls);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    fetch(`https://cooking-toys-server.vercel.app/searchByName/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <div>
      <Header></Header>
      <h1 className="text-center glass rounded-xl text-red-950">
        All Toys: {alls.length}
      </h1>
      <div className="text-center mt-8">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="p-1 border"
        />{" "}
        <button className="btn btn-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {toys.map((addCard) => (
        <AddCard key={addCard._id} addCard={addCard}></AddCard>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default All;
