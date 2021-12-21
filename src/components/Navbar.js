// React based component - rfc
import React from 'react'
import Proptypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
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