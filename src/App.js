import React, { useState, useEffect } from 'react'
import entryService from './services/entryService'
import Entry from './components/Entry'
import EntryForm from './components/EntryForm'
import userService from './services/userService'
import SignupForm from './components/SingupForm'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import About from './components/About'


import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import loginService from './services/loginService'


const App = () => {

    const [entries, setEntries] = useState([])
    const [notification, setNotification] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        entryService
            .getAll()
            .then(entries => setEntries(entries))
            .catch(error => {
                console.log("error", error)
            })
    }, [])

    useEffect(() => {
        const loggedUserJSON= window.localStorage.getItem('logged')
        if (loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            entryService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (userObject) => {
        try{
            const user = await loginService.login(userObject)
            window.localStorage.setItem(
                'logged', JSON.stringify(user)
            )
            entryService.setToken(user.token)
            setUser(user)
            setNotification(`${user.username} logged in`)
            setTimeout(() => setNotification(null), 3000)
            console.log('login successful')
            return true
        } catch(exception) {
            setNotification('Wrong Credentials')
            console.log("ex", exception)
            setTimeout(() => {
                setNotification(null)
            }, 5000)
            return false
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('logged')
        console.log('logged out')
        
        setNotification(`${user.username} logged out`)
        setTimeout(() => {
            setNotification(null)
        }, 5000);
        setUser(null)
    }

    const createEntry = (newObject) => {
        entryService
            .create(newObject)
            .then(returnedEntry => {
                setEntries(entries.concat(returnedEntry))
                setNotification(`${user.username} created ${newObject.title}`)
                setTimeout(() => setNotification(null), 5000)
                console.log(entries)
            })
            .catch(error => {
                setNotification('error happened')
                console.error(error)
            })
    }

    const handleVote = (newObject, vote) => {
        if (user) {
            const updateObject = { ...newObject, votes: newObject.votes + vote }
            entryService
                .update(updateObject, newObject.id)
                .then(() => {
                    setEntries(entries.map(entry => entry.id !== newObject.id ? entry : updateObject))
                })
        } 

    }

    const createUser = (newUser) => {
        userService
            .create(newUser)
            .then(() => {
                setNotification(`user ${newUser.username} signed up`)
                setTimeout(() => setNotification(null), 3000)
            })
            .catch(_error => {
                setNotification("username is taken, try another username")
                setTimeout(() => setNotification(null), 3000)
            })
    }

    return (
        <Router>

            <div className="container">
                <Switch>
                   
                    <Route path="/login">
                        {notification !== null && <p className="notification">{notification}</p>}
                        <Navbar user={user} handleLogout={handleLogout}/>
                        <LoginForm loginUser={handleLogin} />
                    </Route>
                    <Route path="/signup">
                        {notification !== null && <p className="notification">{notification}</p>}
                        <Navbar user={user} handleLogout={handleLogout}/>
                        <SignupForm createUser={createUser} />
                    </Route>
                    <Route path="/about">
                        <Navbar user={user} handleLogout={handleLogout}/>
                        <About />
                    </Route> 
                    <Route path="/">

                        {notification !== null && <p className="notification">{notification}</p>}
                        <Navbar user={user} handleLogout={handleLogout}/>
                        {user !== null && <Togglable buttonLabel="Create Entry">
                            <EntryForm createEntry={createEntry} />
                        </Togglable> }
                        <h1 className="text-center clr-red">Entries</h1>
                        {entries.length !== 0 &&
                            entries.map((entry, i) => <Entry key={i} entry={entry} user={user} handleVote={handleVote} />)}
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
