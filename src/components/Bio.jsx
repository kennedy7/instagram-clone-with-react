import profileIcon from '../assets/profileIcon.svg'
const Bio = ()=>{
const editform =(
    <form className='edit-bio-form' action="">
        <input type="text"  id='' placeholder='your name'/>
        <input type="text" id=''  placeholder='About you'/>
        <br />
        <button type='button' className='cancel-button'>Cancel</button>
        <button type='button' className='save-button'>Save</button>
    </form>
)

    return(
        <section className="bio">
            <div className="profile-photo" role="button" title="Click the edit button">
            <img src={profileIcon} alt="profile" />
            </div>
            <div className="profile-info">
                <p className='name'>Kennedy Hillary</p>
                <p className='about'>your fav node backend developer</p>
                <button>Edit</button>
                {editform}
            </div>
        </section>
    )

}

export default Bio