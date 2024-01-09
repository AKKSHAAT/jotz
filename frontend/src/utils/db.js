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

export const autoSave = async (n)=>{
    const { id, ...noteWithoutId } = n;  //if id is blank it leaves the new entry in db with a blank id
    try{
        if(id){
            await db.notes.put({...noteWithoutId, id})
            .then(()=>console.log("updated::  " + id));
        } else {
            const newId = await db.notes.add(noteWithoutId)
            .then(newId=>{
              console.log("ADDED:   " + newId);
            })
        }
    } catch (error) {
      console.error(error);
    }
}