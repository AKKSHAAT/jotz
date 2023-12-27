import Dexie from 'dexie';

export const db = new Dexie('jotzDB');

db.version(1).stores({
    notes: '++id, title, age'
});

