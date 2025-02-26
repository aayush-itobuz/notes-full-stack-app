import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoteCard } from "../component/NoteCard";
import { Link } from "react-router-dom";
import NoteForm from "../component/NoteForm";
import { instance } from "../helper/instance";

export const DashBoard = () => {
  const [notes, setNotes] = useState([]);
  const [add,setadd] = useState(false);
  const getAllNote = () => {
    instance
      .get('/getAll')
      .then((response) => {
        setNotes(response.data.data);
        setFlag(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllNote();
  },[add]);

  return (
    <>
      <h2 className="text-center mt-10 text-xl font-bold">DashBoard page</h2>
      <NoteForm add={add} setadd={setadd}/>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </>
  );
};
