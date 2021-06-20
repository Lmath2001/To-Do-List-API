import React from 'react'

//Navigation Bar
const Navbar = (props) => {

    const {onSearchChange}=props;
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
              <h2 className="text-white">To Do Lists</h2>
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onSearchChange}
                />
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar
