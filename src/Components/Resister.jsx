import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { authContext } from "../Providers/AuthProviders";
import Header from "./Header";
import Footer from "./Footer";
import dynamicTitle from "../dynamicHooks/DynamicTitle";
const auth = getAuth(app);
const Resister = () => {
  dynamicTitle(`Register`);
  const { user, createUser } = useContext(authContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  console.log(createUser);
  // here are handleResister
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    console.log(email, password, name, photo);

    // crate user from firebase

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        event.target.reset();
        setSuccess("Successfully registered!");
        setError("");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  return (
    <>
      <Header></Header>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-rose-950">
              Register Please!
            </h1>
          </div>
          <form
            onSubmit={handleRegister}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-rose-100 "
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered glass"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered glass"
                />
                <span onClick={() => setShow(!show)}>
                  <small className="p-2 font-bold">
                    {show ? <span>Hide</span> : <span>Show</span>}
                  </small>
                </span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo</span>
                </label>
                <input
                  type="photo"
                  name="photo"
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
                <p className=" text-rose-950">{error}</p>
                <p className=" text-green-500 text-center rounded-2xl glass">
                  {success}
                </p>
                <p>
                  Already registered?
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Resister;
