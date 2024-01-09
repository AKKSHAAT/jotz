import React, { useEffect, useState } from "react";
import { autoSave} from "../utils/db";

export const Editor = (props) => {
  const [note, setNote] = useState({title:"", note:"", id:""});

  useEffect(() => {
    if (props.title) {
      setNote((prevNote) => ({
        ...prevNote,
        title: props.title,
      }));
    }
    if (props.note) {
      setNote((prevNote) => ({
        ...prevNote,
        note: props.note,
      }));

    if (props.id) {
      setNote((prevNote) => ({
        ...prevNote,
        id: props.id
      }));
    }
    }
  }, [props.title, props.note]);
  

  function handleTitle(e){
    setNote({
      ...note,
      title: e.target.value
    });
  }

  function handleNote(e){
    setNote({
      ...note,
      note: e.target.value
    });
  }

  return (
    <div className="right">
        <input type="text" placeholder="Title" onChange={handleTitle} value={note.title}/>
        <hr />
        <textarea onChange={handleNote} value={note.note}>
        </textarea>
      <button onClick={()=>{autoSave(note)}} className="button footer" >save</button>
    </div>
  );
};
