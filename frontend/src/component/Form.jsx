import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const { register, handleSubmit } = useForm();
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
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-7 border-2 rounded-lg max-w-sm sm:mx-auto m-3 my-20"
      >
        <input
          type="text"
          placeholder="Username"
          autoComplete="username"
          {...register("userName", { required: true, minLength: 3 })}
          className="p-2 border-2 border-gray-400 rounded-lg"
        />
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
            validate: {
              // minLength: (value) =>
              //   value.length >= 8 ||
              //   "Password should has more than 8 characters",
              // isCapitalLetter: (value) =>
              //   /[A-Z]/.test(value) ||
              //   "Password should has at least one capital letter",
              // isLowerCaseLetter: (value) =>
              //   /[a-z]/.test(value) ||
              //   "Password should has at least one lower case letter",
              // isContainNumber: (value) =>
              //   /\d/.test(value) || "Password should has at least one number",
            },
          })}
        />

        <button
          type="submit"
          className="p-2 px-5 rounded-lg max-w-28 m-auto bg-sky-500 hover:bg-sky-600 text-white"
        >
          Submit
        </button>
        <h4 className="text-center">Already have an account? <Link to='/login' className="text-blue-600 font-medium">Login</Link></h4>
      </form>
    </>
  );
}
