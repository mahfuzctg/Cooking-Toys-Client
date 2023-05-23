import React from "react";

const Gallery = () => {
  return (
    <>
      <hr />
      <h2 className="text-center font-bold text-rose-950 glass w-9/12 mx-auto rounded-full">
        Our Gallery
      </h2>

      <div className="w-9/12  mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5 bg-red-100 p-4 rounded-2xl">
        <div className="bg-rose-50 p-4  text-center glass shadow-2xl">
          <img
            className="w-full"
            src="https://i.postimg.cc/BQYnJLns/g-1.jpg"
            alt=""
          />
        </div>
        <div className="bg-rose-50 p-4  text-center glass shadow-2xl">
          <img
            className="w-full"
            src="https://i.postimg.cc/jdWGJLhR/g-2.jpg"
            alt=""
          />
        </div>
        <div className="bg-rose-50 p-4  text-center glass shadow-2xl">
          <img
            className="w-full"
            src="https://i.postimg.cc/KzSnQp69/g-3.jpg"
            alt=""
          />
        </div>
        <div className="bg-rose-50 p-4  text-center glass shadow-2xl">
          <img
            className="w-full"
            src="https://i.postimg.cc/mDBPPxfG/g-4.jpg"
            alt=""
          />
        </div>
        <div className="bg-rose-50 p-4  text-center glass shadow-2xl">
          <img
            className="w-full"
            src="https://i.postimg.cc/d3S3NL7q/g-5.jpg"
            alt=""
          />
        </div>
        <div className="bg-rose-50 p-4  text-center glass shadow-2xl">
          <img
            className="w-full"
            src="https://i.postimg.cc/JnpztG5b/g-6.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
