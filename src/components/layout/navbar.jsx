import React from 'react'
import Admin from '../../assets/admin.jpg'
import { Link } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'

const Navbar = () => {
    const firebase = useFirebase()
    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{ 'backgroundColor': '#BFCAD0' }}>
            <div className="container ">
                <Link className="navbar-brand" to="/">
                    Student Info
          </Link>

                <div>
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item" >
                            <Link to="/studentForm" className="btn py-1 mr-5 btn-navbar" >
                                Add Student
                </Link>
                        </li>
                        <li className="nav-item dropdown" >
                            <a
                                className="nav-a dropdown-toggle"
                                href="!#"
                                id="navbarDropdown"
                                data-toggle="dropdown"
                            >

                                <img src={Admin} height='30px' width='30px' alt='admin' />

                                <span className="ml-2 navbar-text">test test</span>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="!#">
                                    Profile
                  </a>
                                <a className="dropdown-item" href="!#" onClick={() => firebase.logout()}>
                                    Logout
                  </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="!#">
                                    Ads
                  </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar