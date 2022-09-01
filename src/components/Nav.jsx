import instagramLogo from '../assets/instagram_logo.png'
const Nav = ()=>{
    return {
        <nav>
          <button className='logo'>
          <img src={instagramLogo} alt="logo"></img>
          </button>
          <input type="text" className="search" placeholder='search'/>
        </nav>
    }
}
export default Nav