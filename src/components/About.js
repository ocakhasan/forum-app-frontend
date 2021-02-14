import React from 'react'

const About = () => {
    return (
        <div className="about">
            <h1 className="about-header">SIMPLE FULL STACK FORUM APPLICATION</h1>
            <p className="about-paragraph">
                <p className="font-bold clr-red">
                This forum application is developed by  
                <a href="https://github.com/ocakhasan" className="link">
                    Me
                </a>
                to improve my Full Stack Skills.  

                </p>
                <p className="font-bold clr-blue">
                Inspired by the 
                <a href="https://reddit.com" className="link">
                    reddit
                </a>
                </p>
                <p>
                    <span className="font-bold clr-green">This application is developed with MERN stack</span>
                    <ul className="stacks">
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node js</li>
                    </ul>
                </p>
                <p>
                    <span className="font-bold clr-purple">There are still things to do. </span> 
                    <ul className="todos">
                        <li>no form validation</li>
                        <li>no comment to forum application</li>
                    </ul>
                </p>
            </p>

        </div>
    )
}

export default About