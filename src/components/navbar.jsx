import '../styles/navbar.css'
import { Link } from 'react-router-dom';
// import Logo from '../11.svg'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src='images/11.svg' alt="" />
            </div>
            <div className="nav_links">
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/movies">Favourites</Link></li>
                <li> <Link to="add-favourites">Add To Favourites</Link></li>
                <li> <Link to="">Logout</Link></li>
                
            </ul>
            </div>
        </div>
     );
}
 
export default Navbar;