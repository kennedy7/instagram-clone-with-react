import Dexie from "dexie";

export const db = new Dexie('myIG')

db.version(1).stores({
    bio: ',name,about',
    gallery: '++id,url',
})