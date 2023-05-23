import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Our Features
        </h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Donec condimentum tellus eget ipsum lacinia, a
                scelerisque felis dignissim.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
              <p className="text-gray-600">
                Sed eget lacus id odio tincidunt facilisis. Integer eu volutpat
                metus. Donec at semper lacus, quis tristique mauris.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
              <p className="text-gray-600">
                Phasellus eu turpis et risus lacinia eleifend. Vivamus rutrum
                mauris ac nunc malesuada, ut pellentesque purus posuere.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 4</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Donec condimentum tellus eget ipsum lacinia, a
                scelerisque felis dignissim.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 5</h3>
              <p className="text-gray-600">
                Sed eget lacus id odio tincidunt facilisis. Integer eu volutpat
                metus. Donec at semper lacus, quis tristique mauris.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 6</h3>
              <p className="text-gray-600">
                Phasellus eu turpis et risus lacinia eleifend. Vivamus rutrum
                mauris ac nunc malesuada, ut pellentesque purus posuere.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 7</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Donec condimentum tellus eget ipsum lacinia, a
                scelerisque felis dignissim.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Feature 8</h3>
              <p className="text-gray-600">
                Sed eget lacus id odio tincidunt facilisis. Integer eu volutpat
                metus. Donec at semper lacus, quis tristique mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
