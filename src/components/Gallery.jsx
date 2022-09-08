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

        <section className='gallery'>
            <div className="item">
                <img src={alex} className="item-image" alt="" />
                <button className='delete-button'>Delete</button>
            </div>
            <div className="item">
                <img src={bondocks} className="item-image" alt="" />
                <button className='delete-button'>Delete</button>
            </div>
            <div className="item">
                <img src={smoke} className="item-image" alt="" />
                <button className='delete-button'>Delete</button>
            </div>
            <div className="item">
                <img src={nude} className="item-image" alt="" />
                <button className='delete-button'>Delete</button>
            </div>
            <div className="item">
                <img src={space} className="item-image" alt="" />
                <button className='delete-button'>Delete</button>
            </div>
        </section>
        </>
    )
}
export default Gallery