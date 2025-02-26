import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoteCard } from "../component/NoteCard";
import { Link } from "react-router-dom";
import NoteForm from "../component/NoteForm";

export const DashBoard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/note/getAll",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setNotes(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 className="text-center mt-10 text-xl font-bold">DashBoard page</h2>
      <NoteForm />
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </>
  );
};
