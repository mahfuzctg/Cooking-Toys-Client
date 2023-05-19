import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="card  w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://i.postimg.cc/Hnp2HnXm/g-1.jpg" alt="Shoes" />
        </figure>
        <div className="card-bod">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
