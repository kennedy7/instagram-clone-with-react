import { useState } from 'react'
import getPhotoUrl from 'get-photo-url'
import profileIcon from '../assets/profileIcon.svg'
const Bio = ()=>{
const [userDetails, setUserDetails] = useState({
        name: 'Kennedy Hillary',
        about: 'your fav node backend developer',
       })

const [editFormIsOpen, setEditFormIsOpen] = useState(false)
const [profilePhoto, setProfilePhoto] = useState(profileIcon)

const updateUserDetails = (e)=>{
        e.preventDefault()
        setUserDetails({
            name: e.target.nameOfUser.value,
            about: e.target.aboutUser.value
       })
       setEditFormIsOpen(false)
    }
const updateProfilePhoto = async ()=>{
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
    
    }

const handleSubmit = (e)=>{
        e.preventDefault()
        updateUserDetails(e)
    }
const editform =(
    <form className='edit-bio-form' action="" onSubmit={handleSubmit}>
        <input type="text"  id='' name='nameOfUser' placeholder='your name'/>
        <input type="text" id='' name='aboutUser' placeholder='About you'/>
        <br />
        <button type='button' className='cancel-button' onClick={()=>setEditFormIsOpen(false)}>Cancel</button>
        <button type='submit' className='save-button' >Save</button>
    </form>
)
const editButton = <button onClick={()=>setEditFormIsOpen(true)}>Edit</button>

    return(
        <section className="bio">
            <input type="file" accept='image/*' name="photo" id='profilePhotoInput' />
            <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                <div className="profile-photo" role="button" title="Click to edit photo">
                    <img src={profilePhoto} alt="profile" />
               </div>
            </label>

            <div className="profile-info">
                <p className='name'>{userDetails.name}</p>
                <p className='about'>{userDetails.about}</p>
                {editFormIsOpen ? editform: editButton}
            </div>
        </section>
    )

}

export default Bio