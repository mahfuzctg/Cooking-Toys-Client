import React, { useState } from "react";

const TabbedCategorySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h3 className="text-center glass rounded-full text-red-950 font-bold p-2">
        Shop by category
      </h3>
      <div className="flex justify-center mb-4">
        <button
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === 0 ? "bg-rose-950 text-rose-50" : "bg-rose-100"
          }`}
          onClick={() => handleTabClick(0)}
        >
          Little Chefs
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === 1 ? "bg-rose-950 text-rose-50" : "bg-rose-100"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Culinary Kids
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 2 ? "bg-rose-950 text-rose-50" : "bg-rose-100"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Playful Kitchen
        </button>
      </div>

      <div className="flex flex-wrap">
        {activeTab === 0 && (
          <>
            <div className="w-full p-2">
              <div className="bg-white rounded shadow p-4">
                <div className="card lg:card-side shadow-xl">
                  <figure>
                    <img
                      className="w-full h-60"
                      src="https://i.postimg.cc/90wsgpFL/cagegory-1.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>
                      Little Chefs' World: Igniting Imagination Through Culinary
                      Adventures
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-rose-50 text-red-950">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="bg-white rounded shadow p-4">
                <div className="card lg:card-side shadow-xl">
                  <figure>
                    <img
                      className="w-full h-60"
                      src="https://i.postimg.cc/RV7vMS4X/cagegory-2.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-rose-50 text-red-950">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="w-full p-2">
              <div className="bg-white rounded shadow p-4">
                <div className="card lg:card-side shadow-xl">
                  <figure>
                    <img
                      className="w-full h-60"
                      src="https://i.postimg.cc/g23sS7yw/cagegory-3.png"
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-rose-50 text-red-950">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-2">
              <div className="bg-white rounded shadow p-4">
                <div className="card lg:card-side shadow-xl">
                  <figure>
                    <img
                      className="w-full h-60"
                      src="https://i.postimg.cc/s2rrqbtb/cagegory-4.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-rose-50 text-red-950">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div className="w-full p-2">
              <div className="bg-white rounded shadow p-4">
                <div className="card lg:card-side shadow-xl">
                  <figure>
                    <img
                      className="w-full h-60"
                      src="https://i.postimg.cc/vB6Hd50N/cagegory-5.webp"
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-rose-50 text-red-950">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-2">
              <div className="bg-white rounded shadow p-4">
                <div className="card lg:card-side shadow-xl">
                  <figure>
                    <img
                      className="w-full h-60"
                      src="https://i.postimg.cc/j5NK1t5V/cagegory-6.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-rose-50 text-red-950">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TabbedCategorySection;
