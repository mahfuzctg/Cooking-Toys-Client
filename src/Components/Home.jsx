import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";
import TabbedCategorySection from "./Tab";
import FeaturesSection from "./Features";
import dynamicTitle from "../dynamicHooks/DynamicTitle";

const Home = () => {
  dynamicTitle(`Home`);
  return (
    <>
      <div
        className="hero min-h-screen mb-5"
        style={{
          backgroundImage: `url("https://i.postimg.cc/0jh1Ykss/cooking-toy-bg.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 glass text-4xl font-bold">
              Welcome to cooking toys
            </h1>
            <p className="mb-5 text-xl font-medium">
              CulinaryKids: Where Imagination Meets Flavor - Explore Our
              Exciting Range of Cooking Toys for Budding Chefs!
            </p>
            <Link to="/register">
              <button className="btn mr-4">Resister</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <About></About>
      </div>
      <>
        <Gallery></Gallery>
      </>

      <>
        <TabbedCategorySection></TabbedCategorySection>
      </>
      <>
        <FeaturesSection></FeaturesSection>
      </>
    </>
  );
};

export default Home;
