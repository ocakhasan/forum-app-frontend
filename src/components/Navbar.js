import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({user, handleLogout}) => {
    return (

        <nav className="nav">
            <ul className="nav__ul">
                <li className="nav__link clr-red"><Link to="">Homepage</Link></li>
                <li className="nav__link clr-blue"><Link to="/about">About</Link></li>
                {user === null ?
                <div className="user-div">
                    <li className="nav__link clr-green"><Link to="/signup">Signup</Link></li>
                    <li className="nav__link clr-purple"><Link to="/login">Login</Link></li>

                </div> : <li className="nav__link clr-green"><button onClick={() => handleLogout()}>Logout</button></li>}
                    
            </ul>
        </nav>

    )
}

export default Navbar