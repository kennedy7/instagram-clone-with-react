import alex from '../assets/alex.jpg'
import bondocks from '../assets/bondock.jpg'
import smoke from '../assets/smoke.jpg'
import nude from '../assets/nude.jpg'
import space from '../assets/space.jpg'
const Gallery =()=>{
    return(
        <>
        <input type="file" name="photo" id="addPhotoInput" />
        <label htmlFor="addPhotoInput">
            <i className="add-photo-button fas fa-plus-square"></i>
        </label>
        </>
    )
}
export default Gallery