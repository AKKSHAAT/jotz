import React, { useEffect, useState } from "react";
import { autoSave} from "../utils/db";
import {useNavigate} from 'react-router-dom';

export const Editor = (props) => {
  const [note, setNote] = useState({title:"", note:"", id:""});
  const [listView, setListView] = useState(false);
  const [noteArray, setNoteArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let saveTimer;
    if (note.id) {
      saveTimer = setTimeout(() => {
        autoSave(note);
      }, 2000);

      return () => clearTimeout(saveTimer);
    }
  }, [note]);


  //props
  useEffect(() => { //updates note state when prop is sent
    if (props.title || props.note || props.id) {
      setNote((prevNote) => ({
        ...prevNote,
        title: props.title || "",
        note: props.note || "",
        id: props.id || "",
      }));
    }
  }, [props.title, props.note, props.id]);
  

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

  function handleListView() {
    if (listView) {
      setListView(false);
    } else {
      setListView(true);
      setNoteArray(note.note.split('\n').filter((text) => text.trim() !== ''));
    }
  }

  return (
    <div className="right">
        <input className="title" type="text" placeholder="Title" onChange={handleTitle} value={note.title}/>
        <button className="button" onClick={handleListView}>
          <i className={listView ? "fa-solid fa-bars" : "fa-regular fa-square-check"}></i>
        </button>
        <hr />
        {listView ? (
          <ul>
            {noteArray.filter(text => text.trim() !== '').map((text, index) => (
              <li className="note-list" key={index}>
                <input className="checkbox" type="checkbox" />
                <input type="text" value={text} />
              </li>
            ))}
          </ul>
        ) : (
          <textarea onChange={handleNote} value={note.note}></textarea>
        )}
  
    </div>
  );
};
