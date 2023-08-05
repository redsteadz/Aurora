
import './Navbar.css'


function Navbar() {
  
  return (
  <div className='nav_container'>
     <nav className='nav_bar'> 
     <form action="https://www.google.com/search" method="get">
        <input className="search_bar" name="q" type="text" placeholder=' Not So Safe Search! '/>
     </form>
    </nav> 
  </div>
  );
}

export default Navbar;

