import React, { useEffect, useState } from 'react'
import {useLiveQuery} from 'dexie-react-hooks'
import { db, DeleteNote} from '../utils/db'
import { Link, useNavigate} from 'react-router-dom';

export const Explorer = () => {
  const allNotes = useLiveQuery(() => db.notes.toArray() );
  const navigate = useNavigate();

  return (
    <div id="left">
            <p>all notes</p>
            <ul>
              { allNotes?.map((note)=>(
                <li key={note.id}>
                  <Link to={`/${note.id}`}>
                    {note.title}
                  </Link>
                  <button className='button' onClick={()=>{DeleteNote(note.id, navigate)}}>
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              ))}
            </ul>
            <Link  className="button footer" to={'/new'}>
              <i className="fa-solid fa-plus"></i>
            </Link>
    </div>
  )
}
