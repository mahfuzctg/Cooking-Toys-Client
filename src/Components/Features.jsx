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
              <h3 className="text-lg font-semibold mb-2">Recipe Library</h3>
              <p className="text-gray-600">
                This feature allows users to access a vast collection of
                child-friendly recipes and cooking ideas. It provides
                step-by-step instructions, ingredient lists, and even
                interactive videos to guide children through the cooking
                process.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Virtual Kitchen</h3>
              <p className="text-gray-600">
                This interactive feature provides a virtual kitchen environment
                where children can simulate cooking using virtual ingredients
                and tools. It offers a safe and mess-free way for kids to
                practice their cooking skills and experiment with different
                recipes.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Cooking Games</h3>
              <p className="text-gray-600">
                This feature offers a range of entertaining and educational
                cooking games that engage children while teaching them basic
                cooking techniques. These games can include tasks like slicing
                vegetables, measuring ingredients, and following recipes to
                enhance their culinary knowledge.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Product Reviews</h3>
              <p className="text-gray-600">
                This interactive feature provides a virtual kitchen environment
                where children can simulate cooking using virtual ingredients
                and tools. It offers a safe and mess-free way for kids to
                practice their cooking skills and experiment with different
                recipes.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">
                Interactive Workshops
              </h3>
              <p className="text-gray-600">
                This feature offers a range of entertaining and educational
                cooking games that engage children while teaching them basic
                cooking techniques. These games can include tasks like slicing
                vegetables, measuring ingredients, and following recipes to
                enhance their culinary knowledge.
              </p>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 lg:w-1/4 p-4"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg glass">
              <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-600">
                This feature provides comprehensive reviews of various cooking
                toys available on the website. It offers insights into the
                features, quality, and safety of the toys, helping parents make
                informed purchasing decisions.
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
                This feature offers virtual cooking workshops conducted by
                professional chefs or cooking enthusiasts. Children can
                participate in live cooking sessions, ask questions, and learn
                new recipes and techniques from the experts.
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
                This feature enables users to connect with other parents and
                share their experiences, tips, and tricks related to cooking
                toys and activities. It fosters a sense of community, encourages
                collaboration, and provides a platform for discussions on all
                things related to cooking toys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
