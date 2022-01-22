// React based component - rfc
import React from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
        {/* Curly brackets in the above line indicates that I am writing JS and ``(backticks) means I can make use of a variable using ${variable} syntax and hence make use of props*/}
        <div className="container-fluid">
          {/* changing href value to # will disable the link */}
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* Note we are using react router below, because of which we have replaced 'a' with 'Link' and 'href' with 'to' in the below tags. Doing this, will enable us to move to different sections of sites without having to reload then entire page every single time. */}
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            {/*<form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-danger" type="submit">Search</button>
              {/* In bootstrap, success represents green, primary represnts blue and danger represnts red */}
            {/*</form>*/}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> {/* In bootstrap, in order to make any text white, we make use of text-light class*/}
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"  />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>

      </>
    );
}

/*Below propTypes are defining variable type for every prop(title, aboutText) */
Navbar.propTypes={
    title: Proptypes.string.isRequired,/* title prop is set as string type and is mandatory */
    aboutText: Proptypes.string
}

/*In case, no props are passed to Navbar component, then we are setting default for individual props */
Navbar.defaultProps ={
    title: "Set title here",
    aboutText: "About"
}

/* In short, props behave just like any arguments passed to a function */