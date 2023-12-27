import React, { useEffect, useState } from "react";
import { db } from "../utils/db";

export const Editor = (props) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function handleTitle(e){
    setTitle(e.target.value);
  }

  function handleNote(e){
    setNote(e.target.value);
  }

  useEffect(()=>{
    if (props.title) setTitle(props.title);
    if (props.note) setNote(props.note);
  }, [props.title, props.note]);


  async function autoSave(){
    try{
      const id = await db.notes.add({
        title,
        note
      })
      .then(id=>{
        console.log(id);
      })
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <div className="right">
      <input type="text" placeholder="Title" onChange={handleTitle} value={title}/>
      <hr />
      <textarea onChange={handleNote} value={note}></textarea>
      <button onClick={autoSave}>save</button>
    </div>
  );
};
