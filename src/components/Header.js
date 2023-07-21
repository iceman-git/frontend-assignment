import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    const activeStyle = {
        textDecoration: "underline",
        color: "green"
      };

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h3 className='text-grad-logo'>OnlineStore</h3></Link>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-links">
                        <li className="nav-item">
                            <NavLink className='nav-link custom-link' style= {({isActive})=> isActive? activeStyle: null} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link custom-link" style= {({isActive})=> isActive? activeStyle: null} to="cart">Cart</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <NavLink className='nav-link'to="search">Search</NavLink>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  </div>
  )
}

export default Header;
