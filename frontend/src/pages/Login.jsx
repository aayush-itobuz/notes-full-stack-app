import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.accessToken);

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken);
        
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h2 className="text-center mt-10 text-xl font-bold">Login page</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-7 border-2 rounded-lg max-w-sm sm:mx-auto m-3 my-20"
      >
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="p-2 border-2 border-gray-400 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          className="p-2 border-2 border-gray-400 rounded-lg"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />

        <button
          type="submit"
          className="p-2 px-5 rounded-lg max-w-28 m-auto bg-sky-500 hover:bg-sky-600 text-white"
        >
          Submit
        </button>
        <h4 className="text-center">
          Don't have an account?{" "}
          <Link to="/" className="text-blue-600 font-medium">
            Sign up
          </Link>
        </h4>
      </form>
    </>
  );
};
