import React, { useEffect, useState } from "react";
import { autoSave} from "../utils/db";

export const Editor = (props) => {
  const [note, setNote] = useState({title:"", note:"", id:""});
  const [listView, setListView] = useState(false);
  const [noteArray, setNoteArray] = useState([]);


  let saveTimer;
  useEffect(() => {
    if (note.id) {
      saveTimer = setTimeout(() => {
        autoSave(note);
      }, 2000); 
    }

    return () => {
      clearTimeout(saveTimer); // Clear the timer when the component unmounts or note changes
    };
  }, [note]);

  useEffect(() => {
    clearTimeout(saveTimer);
    const newTimer = setTimeout(() => {
      autoSave(note);
    }, 2000); 

    return () => {
      clearTimeout(newTimer);
    };
  }, [note]);

  useEffect(() => {  //updates note state when prop is sent
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

  function handleListView(){
    if(listView){
      setListView(false);
    } else {
      setListView(true);
      setNoteArray(()=>{
        return note.note.split('\n');
      });
      console.log(noteArray);
    }
  }

  return (
    <div className="right">
        <input className="title" type="text" placeholder="Title" onChange={handleTitle} value={note.title}/>
        <button className="button" onClick={handleListView}>
          <i class={listView ? "fa-solid fa-bars" : "fa-regular fa-square-check"}></i>
        </button>
        <hr />
        {listView ? (
          <ul>
            {noteArray.filter(text => text.trim() !== '').map((text, index) => (
              <li className="note-list" key={index}>
                <input className="checkbox" type="checkbox"></input>
                <input type="text" value={text} ></input>
              </li>
            ))}
          </ul>
        ) : (
          <textarea onChange={handleNote} value={note.note}></textarea>
        )}
      {/* <button onClick={()=>{autoSave(note)}} className="button footer" >save</button> */}
    </div>
  );
};
