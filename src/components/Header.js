import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [searchItem, setSearchItem]= useState('');
    const navigate= useNavigate();

    const handleSearch=(e)=>{
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchItem)}`);
    }

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
                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search for Product" value={searchItem} onChange={e=>setSearchItem(e.target.value)} aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">search</button>
                    </form>
                </div>
            </div>
        </nav>
  </div>
  )
}

export default Header;
