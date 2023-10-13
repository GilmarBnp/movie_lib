import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
  const[search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if(!search)return

    navigate(`/search/?q=${search}`)
    setSearch("");
  };

    return (
      <nav id='navbar'>
      <h2>
        <Link to='/'>
          <BiCameraMovie/>Moviesdb
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input onChange={(e) => setSearch(e.target.value)} 
           type="text" 
           placeholder='Busque um filme'
           value={search}/>
          <button type='submit'>
            <BiSearchAlt2/>
          </button>
        </div>
      </form>
    </nav>
    )
}

export default Navbar