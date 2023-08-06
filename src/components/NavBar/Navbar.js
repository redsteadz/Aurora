import './Navbar.css'
import {LiaSearchSolid} from 'react-icons/lia'
function Navbar() {
  
  return (
  <div className='nav_container'>
     <nav className='nav_bar'> 
     <form action="https://www.google.com/search" method="get" className='searchForm'>
        <LiaSearchSolid size={25} className='search_icon' fill='cyan'/>
        <input className="search_bar" name="q" type="text" placeholder=' Google Search! '/>
     </form>
    </nav> 
  </div>
  );
}

export default Navbar;

