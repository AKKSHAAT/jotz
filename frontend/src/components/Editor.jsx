import React, { useEffect, useState } from "react";
import { db, autoSave} from "../utils/db";
import { Pomodoro } from "./Pomodoro";

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


  return (
    <div className="right">
        <input type="text" placeholder="Title" onChange={handleTitle} value={title}/>
        <hr />
        <textarea onChange={handleNote} value={note}>
        </textarea>
      <button onClick={()=>{autoSave(title, note)}} className="button footer" >save</button>
    </div>
  );
};
