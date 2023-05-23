import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const id = useLoaderData();
  const { _id, price, quantity, description } = id;

  // console.log(id)

  const handleUpdatedToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = parseFloat(form.price.value);
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = { price, quantity, description };
    console.log(updatedToy);

    fetch(`https://cooking-toys-server.vercel.app/updatedtoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.reset();

          Swal.fire({
            title: "success!",
            text: " Toy Updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="card-body mt-8 rounded-lg bg-[#F3F3F3]">
          <form onSubmit={handleUpdatedToy}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="$ Price"
                  defaultValue={price}
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available quantity"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Descriptions</span>
                </label>
                <textarea
                  className="p-4 input input-bordered"
                  name="description"
                  type="text"
                  placeholder="Toy's Details"
                  defaultValue={description}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-rose-950">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
