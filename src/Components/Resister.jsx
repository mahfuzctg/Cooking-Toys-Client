import React from "react";
import { Link } from "react-router-dom";

const Resister = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-rose-950">Register Please!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-rose-100 ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                required
                className="input input-bordered glass"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                required
                className="input input-bordered glass"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                required
                className="input input-bordered glass"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo</span>
              </label>
              <input
                type="photo"
                placeholder="photo url"
                required
                className="input input-bordered glass"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary glass"
                type="submit"
                value="Register"
              />
            </div>
            <div>
              <p>
                Already registered?
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
