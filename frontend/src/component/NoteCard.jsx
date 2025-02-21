import React from "react";

export const NoteCard = ({ noteId, noteContent }) => {
  return (
    <>
      <div className="border-2 ">
        <p>{noteId}</p>
        <p>{noteContent}</p>
      </div>
    </>
  );
};
