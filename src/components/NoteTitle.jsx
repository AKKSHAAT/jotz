import React from 'react'
import { useState } from 'react'

export const NoteTitle = () => {

    const [NoteTitle, setNoteTitle] = useState("one thirty");

  return (
    <div className='title'>
        <span className=' text-gray-400 '>{NoteTitle}</span>
        
    </div>
  )
}
