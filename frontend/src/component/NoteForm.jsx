import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function NoteForm({add,setadd}) {
  const { register, handleSubmit } = useForm();
  function onSubmition( data) {
    console.log(data);
    console.log("note form submitted");

    let config = {
      method: "post",
      url: "http://localhost:3000/note/add",
      data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setadd(!add);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmition)} className="m-5">
        <input
          type="text"
          placeholder="Title"
          name="title"
          {...register("title")}
          className="p-2 m-2 border-2 border-gray-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Content"
          name="content"
          {...register("content")}
          className="p-2 m-2 border-2 border-gray-400 rounded-lg"
        />
        <button
          className="border-2 p-1 border-gray-400 rounded-lg"
        >
          <h3>+</h3>
        </button>
      </form>
    </>
  );
}
