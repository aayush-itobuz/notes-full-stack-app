import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);


    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/user/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input
        type="text"
        placeholder="Username"
        {...register("userName", { required: true, maxLength: 80 })}
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true, min: 8 })}
      />

      <input type="submit" />
    </form>
  );
}
