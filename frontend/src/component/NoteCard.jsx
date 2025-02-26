import React from "react";
import { Link } from "react-router-dom";

export const NoteCard = ({ note }) => {
  return (
    <>
      <div className="bg-white rounded shadow-lg overflow-hidden p-5">
        <h2 className="text font-semibold pb-5">Title: {note.title}</h2>
        <p>Content: {note.content}</p>

        <div className="flex gap-4 mt-5">
          <Link to='/edit' className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600">Edit</Link>
          <Link to='/edit' className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600">Delete</Link>
        </div>
      </div>
    </>
  );
};
