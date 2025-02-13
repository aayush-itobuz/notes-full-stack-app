import React from "react";

export const NoteCard = ({ noteId }) => {
  return (
    <>
      <div className="border-2 ">
        <p>{noteId}</p>
      </div>
    </>
  );
};
