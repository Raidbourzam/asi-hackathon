import react, {useState} from 'react'
import aa from '../Image/sigrex.png'
import './Navbar.css' 
import { Link } from 'react-router-dom';




function Navbar() {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
      if (window.innerWidth <= 768) {
        setNav(true);
      } else {
        setNav(false);
      }
    }

       
        window.addEventListener('resize', changeBackground);

        const scrollToSection = (sectionId) => {
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: 'smooth' });
        };


    return(
     <nav className={nav ? 'nav active' : 'nav'} >
        
       
           <a href='section3' className='logo'>
                <img src={aa} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
           
            <ul className='menu'>
                <li><a href='/Formations'>Catalogue de formation</a></li>
                <li> <a >Formation avant promotion</a></li>
                <li>  <a>Formateurs</a></li>
                <li><a href='/Partenaires'>Partenaires</a></li>
                <li><a>Connexion</a></li>
                
    </ul>
    
    </nav>
        
    )

}
export default Navbar;