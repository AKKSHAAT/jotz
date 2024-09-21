import {atom} from 'jotai';
import {testData} from './testData'
import { db, DeleteNote} from '../utils/db'


const allNotes = testData;

export const notesAtom = atom(allNotes);
export const selectedNoteIndexAtom = atom(null);


export const selectedNoteAtom = atom( get=>{
    const notes = get(notesAtom);
    const selectedNoteIndex = get(selectedNoteIndexAtom);

    if(!selectedNoteIndex) return null;

    const selectedNote = notes[selectedNoteIndex];

    return{
        ...selectedNote,
        content: `hello from Note ${selectedNoteIndex}`
    }

} );
