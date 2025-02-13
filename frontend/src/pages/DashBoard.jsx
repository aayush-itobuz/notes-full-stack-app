import React, { useEffect, useState } from "react";
import { NoteCard } from "../component/NoteCard";
import axios from "axios";

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

    axios.request(config)
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
      {notes.map(note=><NoteCard key={note._id} noteId={note.title} />)}
      
    </>
  );
};
