import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from "../Firebase/firebase.config";
import { authContext } from "../Providers/AuthProviders";
import Footer from "./Footer";
import Header from "./Header";

const auth = getAuth(app);
const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const { user, signIn } = useContext(authContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // Here are handleGoogleLogin
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Successfully logged!");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // here are handleLogin
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(email, password, photo);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Successfully logged!");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Header></Header>
      <div className=" bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-rose-950">Login Please!</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="card w-full max-w-sm shadow-2xl bg-rose-100 "
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
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
                  placeholder="password"
                  name="password"
                  id="password"
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
                  id="photo"
                  required
                  className="input input-bordered glass"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary glass"
                  type="submit"
                  value="Login"
                />
              </div>
              <button className="btn bg-red-500" onClick={handleGoogleLogin}>
                Google
              </button>
              <div>
                <p className=" text-red-950">{error}</p>
                <p className="text-green-5000 glass text-center rounded-xl">
                  {success}
                </p>
                <p>
                  New to cooking toys?
                  <Link to="/register">Register</Link>
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

export default Login;
