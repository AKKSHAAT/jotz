import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "../components/Editor";
import { db } from "../utils/db";
import { testData } from "../store/testData";

import { useAtomValue } from "jotai";
import { selectedNoteAtom } from "../store/store";

export const Note = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  const selectedNote = useAtomValue(selectedNoteAtom);
  const [NoteTitle, setNoteTitle] = useState(selectedNote.title || "one thirty");

  console.log(NoteTitle);

  useEffect(()=>{
    async function fetchNote(){     //for some reason i have to use a function here
        try{
            const retrivedNote = await db.notes.get(parseInt(id));
            setNote(retrivedNote);
        } catch (error) {
            console.error("error:::::::: " , error);
        }
    }

    fetchNote();
  })

  return (
    <>
        {note ?(
            <Editor note={note.note} title={note.title} id={note.id}/>
        ) : (
            <h2>loading notes...</h2>
        )}
    </>
    
  )
};
