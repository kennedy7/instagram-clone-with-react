import getPhotoUrl from 'get-photo-url'
import { useState, useEffect } from 'react'
import {db} from  '../dexie'
const Gallery =()=>{

const [allPhotos, setAllPhotos] = useState([]);
useEffect(()=>{
    const setPhotosFromDb = async ()=>{
    const PhotosFromDb = await db.bio.get('images');
    PhotosFromDb && setAllPhotos(PhotosFromDb)
     }
     setPhotosFromDb()
 })
 

const addPhoto = async ()=>{
    const newPhoto = {
        id: Date.now(),
        url: await getPhotoUrl('#addPhotoInput')
    }
    setAllPhotos([newPhoto, ...allPhotos])
    await db.gallery.put(newPhoto, 'images')
}
    return(
        <>
        <input type="file" name="photo" id="addPhotoInput" />
        <label htmlFor="addPhotoInput" onClick={addPhoto}>
            <i className="add-photo-button fas fa-plus-square"></i>
        </label>

        <section className='gallery'>
            {allPhotos.map((photo)=>(
                 <div className="item" key={photo.id}>
                 <img src={photo.url} className="item-image" alt="" />
                 <button className='delete-button'>Delete</button>
             </div>
            ))}
      
        </section>
        </>
    )
}
export default Gallery