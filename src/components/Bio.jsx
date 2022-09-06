import profileIcon from '../assets/profileIcon.svg'
const Bio = ()=>{
    return(
        <section className="bio">
            <div className="profile-photo" role="button" title="Click the edit button">
            <img src={profileIcon} alt="profile" />
            </div>
            <div className="profile-info">
                <p className='profile-info'> Kennedy Hillary</p>
            </div>
        </section>
    )

}

export default Bio