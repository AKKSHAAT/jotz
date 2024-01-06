import React, { useEffect, useState } from 'react'
import {useLiveQuery} from 'dexie-react-hooks'
import { db } from '../utils/db'
import { Link } from 'react-router-dom';

export const Explorer = () => {
  const allNotes = useLiveQuery(() => db.notes.toArray() );

  // try its own id to array, click to delete
  
  return (
    <div id="left">
            <p>all notes</p>
            <ul>
              { allNotes?.map((note)=>(
                <li key={note.id}>
                  <Link to={`/${note.id}`}>
                    {note.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link  className="button footer" to={'/new'}>new</Link>
    </div>
  )
}
