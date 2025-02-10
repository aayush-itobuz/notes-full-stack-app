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
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-7 border-2 rounded-lg max-w-sm sm:mx-auto m-3 my-20">
      <input
        type="text"
        placeholder="Username"
        {...register("userName", { required: true, maxLength: 80 })}
        className="p-2 border-2 border-gray-400 rounded-lg"
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="p-2 border-2 border-gray-400 rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true, min: 8 })}
        className="p-2 border-2 border-gray-400 rounded-lg"
      />

      <input type="submit" className="p-2 px-5 rounded-lg max-w-28 m-auto bg-sky-500 hover:bg-sky-600 text-white"/>
    </form>
    </>
  );
}
