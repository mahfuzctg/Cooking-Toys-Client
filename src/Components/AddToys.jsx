import React from "react";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Header from "./Header";
const AddToys = () => {
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const sale = form.sale.value;
    const toy = form.toy.value;
    const price = form.price.value;
    const photo = form.photo.value;
    // const rating = form.rating.value;
    // const description = form.description.value;
    const newToys = {
      name,
      email,
      quantity,
      category,
      sale,
      toy,
      price,
      photo,
      rating,
      description,
    };
    console.log(newToys);

    //
    fetch("http://localhost:5000/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Good Job!",
            text: "Added Toy Successfully!",
          });
        }
      });
  };
  return (
    <>
      <Header></Header>
      <div className=" bg-red-100 m-5">
        <form onSubmit={handleAddToy}>
          {/*Seller Name and email  */}
          <div className="lg:flex container mx-auto">
            <div className="form-control lg:w-1/2 mb-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <br />
          {/* Photo and Toy name */}
          <div className="lg:flex container mx-auto">
            <div className="form-control lg:w-1/2 mb-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Enter Photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="toy"
                  required
                  placeholder="Enter toy name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* sub category and quantity */}
          <div className="lg:flex container mx-auto">
            <div className="form-control lg:w-1/2 mb-2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  required
                  placeholder="Enter category name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  required
                  placeholder="Enter quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Price and rating */}
          <div className="lg:flex container mx-auto">
            <div className="form-control lg:w-1/2 mb-2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="price"
                  name="price"
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter selling"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Description
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group w-full">
              <textarea
                type="message"
                name="description"
                id="description"
                cols="80"
                rows="5"
                placeholder="Description"
              ></textarea>
            </label>
          </div> */}
          <input
            className="btn btn-block mt-2 bg-rose-950 text-red-100 hover:bg-rose-700"
            type="submit"
            value="Add a toy"
          />
        </form>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AddToys;
