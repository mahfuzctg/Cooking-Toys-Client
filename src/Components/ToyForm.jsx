import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Input field */}
      <input
        type="text"
        name="name"
        ref={register({ required: true })} // Add validation rules here
      />
      {errors.name && <span>This field is required</span>}

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};
