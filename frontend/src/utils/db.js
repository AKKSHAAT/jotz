import Dexie from 'dexie';
export const db = new Dexie('jotzDB');

db.version(1).stores({
    notes: '++id, title, age'
});

export const DeleteNote = async (noteID, navigate)=>{
    await db.notes.delete(noteID)
      .then(() => {
        navigate('/');
    }).catch((err) => {
        console.log(err);
    });
} 

export const autoSave = async (title, note)=>{
    try{
      const id = await db.notes.add({
        title,
        note
      })
      .then(id=>{
        console.log("ADDED:   " + id);
      })
    } catch(error) {
      console.log(error);
    }
}