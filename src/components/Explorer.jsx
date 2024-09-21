import React, { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db, DeleteNote } from "../utils/db";
import { Link, useNavigate } from "react-router-dom";
import { NewButton } from "./newButton";
import { useNotesList } from "../hooks/useNotesList";
import { NotePreview } from "./NotePreview";

export const Explorer = () => {
  const [hamburger, setHamburger] = useState(true);

  // const allNotes = useLiveQuery(() => db.notes.toArray() );

  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({});

  const navigate = useNavigate();

  return (
    <>
      <div className="explorer">
        <p>all notes</p>
        <ul>
          {notes?.map((note, i) => (
            <li
              key={note.id}
              onClick={() => handleNoteSelect(i)}
              className={selectedNoteIndex === i ? "is-active" : ""}
            >
              <button>{note.title}</button>
              <button className="button">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </li>
          ))}
        </ul>

        <div className="footer">
          <NewButton />
        </div>
      </div>
    </>
  );
};
