import { navBarItems } from "../../services/nav_bar_items"
import './navbar.css';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar is-flex space-between align-items-center">
      <div className="text-size-h5" id='logo'>
        <Link to="/">
          <img height={36} src={logo} alt='logo' />
        </Link>
      </div>
      <div className="is-flex gap-48" id='nav-items'>
        {
          navBarItems.map((navItem)=> 
          <div key={navItem.key}>
            <Link to={navItem.path}>
             <span className="text-size-h6">{navItem.title}</span>
            </Link>
          </div>)
        }
      </div>
    </div>
  )
}

export default NavBar
