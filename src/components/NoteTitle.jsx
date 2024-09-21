import { useAtomValue } from 'jotai';
import React from 'react'
import { useState } from 'react'
import { selectedNoteAtom } from '../store/store';

export const NoteTitle = () => {

    const selectedNote = useAtomValue(selectedNoteAtom);

    const [NoteTitle, setNoteTitle] = useState(selectedNoteAtom.title || "one thirty");

  return (
    <div className='title'>
        <span className=' text-gray-400 '>{NoteTitle}</span>
        
    </div>
  )
}
