import { useEffect } from 'react';

import './Navbar.css'

function Navbar() {
  
  return (
  <div className='nav_container'>
     <nav className='nav_bar'> 
     <form action="https://www.google.com/search" method="get">
        <input className="search_bar" name="q" type="text" placeholder=' Google Search! '/>
     </form>
    </nav> 
  </div>
  );
}

export default Navbar;

