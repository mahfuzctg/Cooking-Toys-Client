import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LittleToy from "./sub/LittleToy";
import KidsToy from "./sub/KidsToy";
import PlayfulToy from "./sub/PlayfulToy";
import { authContext } from "../Providers/AuthProviders";

const TabbedCategorySection = () => {
  const [categories, setCategories] = useState([]);
  const { loading } = useContext(authContext);

  useEffect(() => {
    fetch(`https://cooking-toys-server.vercel.app/addtoys${categories}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  //
  const little = categories.filter((item) => item.category === "little");

  const kids = categories.filter((item) => item.category === "kids");
  const playful = categories.filter((item) => item.category === "playful");
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h3 className="text-center glass rounded-full text-red-950 font-bold p-2">
        Shop by category
      </h3>
      {/* */}
      <Tabs>
        <TabList className="flex mt-8 justify-center gap-12">
          {little.slice(0, 1).map((category, index) => (
            <Tab className="btn btn-primary" key={index}>
              {category.category}
            </Tab>
          ))}
          {kids.slice(0, 1).map((category, index) => (
            <Tab className="btn btn-primary" key={index}>
              {category.category}
            </Tab>
          ))}
          {playful.slice(0, 1).map((category, index) => (
            <Tab className="btn btn-primary" key={index}>
              {category.category}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="md:flex justify-center gap-8">
            {little.slice(0, 2).map((category, index) => (
              // <SportsCar </SportsCar>
              <LittleToy category={category} key={index}></LittleToy>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="md:flex justify-center gap-8">
            {kids.slice(0, 2).map((category, index) => (
              <KidsToy category={category} key={index}></KidsToy>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="md:flex justify-center gap-8">
            {playful.slice(0, 2).map((category, index) => (
              <PlayfulToy category={category} key={index}></PlayfulToy>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabbedCategorySection;
