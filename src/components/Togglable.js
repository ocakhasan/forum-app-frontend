import React, { useState} from 'react'

const Togglable = (props) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }


    return (
        <div>
            <div style={hideWhenVisible} >
                <button className="btn" onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible} className="togglableContent">
                {props.children}
                <button className="btn" onClick={toggleVisibility}>cancel</button>
            </div>
        </div>
    )
}



export default Togglable