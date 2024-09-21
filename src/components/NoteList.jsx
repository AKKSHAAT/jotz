import React from 'react'
import { useNotesList } from '../hooks/useNotesList';

export const NoteList = () => {
    const {notes, selectedNoteIndex, handleNoteSelect} = useNotesList({});
    if(notes.length === 0){
        return(
            <ul>
                <span> no notes yet </span>
            </ul>
        )
    }
  

    return (
        <ul>
            { notes?.map((note)=>(
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
   )
}
