import { useAtom, useAtomValue} from 'jotai';
import { notesAtom, selectedNoteIndexAtom } from '../store/store';

export const useNotesList = ({onSelect})=> {
    
    const notes = useAtomValue(notesAtom);
    const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom);
 
    const handleNoteSelect = async (index) => {
        setSelectedNoteIndex(index);
        console.log(selectedNoteIndex);
    }

    if(onSelect) {
        onSelect();
    }

    return {
        notes,
        selectedNoteIndex,
        handleNoteSelect
    }
}