import React from "react";

const About = () => {
  return (
    <>
      <hr />
      <h2 className="text-center rounded-2xl text-rose-950">ABOUT US </h2>
      <div>
        <div className="card lg:card-side bg-rose-100  my-8">
          <figure>
            <img
              className="w-full"
              src="https://i.postimg.cc/BvSFvcX9/cooking-toy-about.webp"
              alt="Album"
            />
          </figure>
          <div className="w-9/12 mx-auto">
            <h4 className="text-xl font-bold text-center pt-3 text-rose-950">
              Welcome to our Cooking Toys Wonderland!
            </h4>
            <p className="px-4 text-justify">
              We invite you to embark on a flavor-filled journey where
              imagination takes the lead. Our extraordinary collection of
              cooking toys is designed to inspire and entertain young aspiring
              chefs. From fully-equipped mini kitchens to lifelike play food and
              utensils, our toys offer endless opportunities for imaginative
              play. Watch as your child whips up gourmet masterpieces, hosts
              make-believe cooking shows, and explores the joy of culinary
              creativity. But it's not just about fun and games. Our cooking
              toys also promote essential skills like teamwork, communication,
              and problem-solving. They encourage children to experiment, follow
              recipes, and develop a love for good food and healthy eating
              habits. Rest assured, safety and quality are at the heart of our
              selection. We source toys from trusted brands, ensuring they meet
              the highest standards and are free from harmful substances.
              Whether your little one dreams of being a top chef or simply loves
              the magic of the kitchen, our cooking toys will spark their
              imagination and create lasting memories. So, grab an apron and let
              the adventure begin!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
