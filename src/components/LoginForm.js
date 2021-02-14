import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'

const LoginForm = ({ loginUser }) => {
    const history = useHistory()
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const logUser = async (event) => {
        event.preventDefault()
        const result = await loginUser({
            username,
            password
        })

        if(result){
            setUsername('')
            setPassword('')
            history.push('/')
        }
    }

    return (
        <form onSubmit={logUser} className="form">
            <div className="form-part">
                <label className="clr-purple">Username</label>
                <input type="text" value={username} 
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-part">
                <label className="clr-purple">Password</label>
                <input type="password" value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn clr-purple">
               Login 
            </button>
            <p>If you do not have an account, you can <Link to="/signup">sign-up</Link> from here</p>
        </form>
    )
}

export default LoginForm