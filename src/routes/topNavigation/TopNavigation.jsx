import { Link, Outlet } from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './topNavigation.styles.scss';

const TopNavigation = () => {
  return(
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>

          <Link className="nav-link" to='/shop'>
            CONTACT
          </Link>

          <Link className="nav-link" to='/signin'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default TopNavigation;