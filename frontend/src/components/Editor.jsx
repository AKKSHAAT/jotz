import React, { useState } from "react";

export const Editor = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function handleTitle(e){
    setTitle(e.target.value);
  }

  function handleNote(e){
    setNote(e.target.value);
  }

  return (
    <div className="right">
      <input type="text" placeholder="Title" onChange={handleTitle} />
      <hr />
      <textarea onChange={handleNote}></textarea>
    </div>
  );
};
