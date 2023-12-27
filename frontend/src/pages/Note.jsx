import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "../components/Editor";
import { db } from "../utils/db";

export const Note = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

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
    <div>
        {note ?(
            <Editor note={note.note} title={note.title} />
        ) : (
            <h2>loading notes...</h2>
        )}
    </div>
    
  )
};
