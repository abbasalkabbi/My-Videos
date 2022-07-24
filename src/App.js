/* eslint-disable jsx-a11y/anchor-is-valid */
import  React from "react";
import { Routes, Route,NavLink } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
    {/* Navbar */}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Content Navbat */}
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Videos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* Item Links */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home links */}
            <li class="nav-item">
              <NavLink
              				to='/'
              				className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link  ')}>
          				Home
          			  </NavLink>
            </li>
            {/* End Home links */}
            {/* About Links */}
            <li class="nav-item">
              <NavLink
              				to='about'
              				className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link  ')}>
          				About
          			  </NavLink>
            </li>
            {/* End About links */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          {/* Search  */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {/* End Search */}
        </div>
        {/* END Item Links */}
      </div>
      {/* END Content Navbat */}

    </nav>
  {/* End Nav bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
