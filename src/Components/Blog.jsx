import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <h2 className="text-center glass text-4xl font-bold text-red-950  py-5">
        Some Important QN And Answer.
      </h2>
      <div className="glass p-4 m-4">
        <h2>
          Question_1: What is an access token and refresh token? How do they
          work and where should we store them on the client-side?
        </h2>
        <p>
          Ans_1: An access token is a credential that grants access to specific
          resources, while a refresh token is used to obtain a new access token
          when the current one expires. They should be securely stored on the
          client-side, typically in browser cookies or local storage, to
          maintain session state and enable authenticated requests.
        </p>
        <hr />
        <h2>Question_2: Compare SQL and NoSQL databases?</h2>
        <p>
          Ans_2: SQL: Structured, tabular data model. NoSQL: Flexible,
          schema-less data model. SQL scales vertically; NoSQL scales
          horizontally. SQL uses SQL language; NoSQL uses various query
          languages.
        </p>
        <hr />
        <h2>Question_3: What is express js? What is Nest JS? </h2>
        <p>
          Ans_3: Express.js: Minimalist web app framework for Node.js. Nest.js:
          Progressive Node.js framework for building efficient, scalable
          applications.
        </p>
        <hr />
        <h2>Question_4: What is MongoDB aggregate and how does it work </h2>
        <p>
          Ans_4: MongoDB aggregate: Data processing pipeline that performs
          complex data manipulations and aggregations on MongoDB collections.{" "}
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
