import React from "react";

const AddToys = () => {
  return (
    <div className=" bg-red-100 m-5">
      <form>
        {/*Seller Name and email  */}
        <div className="lg:flex container mx-auto">
          <form className="form-control lg:w-1/2 mb-2">
            <label className="input-group">
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </label>
          </form>
          <form className="form-control lg:w-1/2">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </label>
          </form>
        </div>
        <br />
        {/* Photo and Toy name */}
        <div className="lg:flex container mx-auto">
          <form className="form-control lg:w-1/2 mb-2">
            <label className="input-group">
              <span>Photo</span>
              <input
                type="text"
                name="photo"
                required
                placeholder="Enter Photo url"
                className="input input-bordered w-full"
              />
            </label>
          </form>
          <form className="form-control lg:w-1/2">
            <label className="input-group">
              <span>Toy name</span>
              <input
                type="text"
                name="toy"
                required
                placeholder="Enter toy name"
                className="input input-bordered w-full"
              />
            </label>
          </form>
        </div>
        {/* sub category and quantity */}
        <div className="lg:flex container mx-auto">
          <form className="form-control lg:w-1/2 mb-2">
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                required
                placeholder="Enter category name"
                className="input input-bordered w-full"
              />
            </label>
          </form>
          <form className="form-control lg:w-1/2">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="quantity"
                required
                placeholder="Enter quantity"
                className="input input-bordered w-full"
              />
            </label>
          </form>
        </div>
        {/* Price and rating */}
        <div className="lg:flex container mx-auto">
          <form className="form-control lg:w-1/2 mb-2">
            <label className="input-group">
              <span>Price</span>
              <input
                type="price"
                name="price"
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </label>
          </form>
          <form className="form-control lg:w-1/2">
            <label className="input-group">
              <span>Sale</span>
              <input
                type="text"
                name="sale"
                placeholder="Enter selling"
                className="input input-bordered w-full"
              />
            </label>
          </form>
        </div>
        <div>
          <form className="form-control lg:w-1/2">
            <label className="input-group">
              <span>Sale</span>
              <input
                type="text"
                name="sale"
                placeholder="Enter selling"
                className="input input-bordered w-full"
              />
            </label>
          </form>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
