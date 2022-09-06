import instagramLogo from '../assets/instagram_logo.png'
const Nav = ()=>{
    return (
      <nav>
          <button className='logo'>
          <img src={instagramLogo} alt="logo"></img>
          </button>
          <input type="text" className="search" placeholder='search'/>
          <span className='nav-links'>
            <button>
              <i className='fa fa-home'></i>
            </button>
            <button>
              <i className='fa fa-comment-alt'></i>
            </button>
            <button>
              <i className='fa fa-compass'></i>
            </button>
            <button>
              <i className='fa fa-heart'></i>
            </button>
          </span>
      </nav>
    )
}
export default Nav