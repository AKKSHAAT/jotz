import {atom} from 'jotai';
import { db, DeleteNote} from '../utils/db'


const allNotes = db.notes.toArray();

export const noteAtom = atom(allNotes);
