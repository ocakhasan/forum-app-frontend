import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SignupForm = ({ createUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const addUser = (event) => {
        event.preventDefault()
        createUser({
            username,
            email,
            password
        })
    }

    return (
        <form onSubmit={addUser} className="form">
            <div className="form-part">
                <label className="clr-green">Username</label>
                <input type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-part">
                <label className="clr-green">Email</label>
                <input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-part">
                <label className="clr-green">Password</label>
                <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn clr-green">
                Create User
            </button>
            <p>If you have an account, you can <Link to="/login">login</Link> from here</p>
        </form>
    )
}

export default SignupForm