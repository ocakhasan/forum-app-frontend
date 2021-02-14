import React from 'react'
import { useHistory } from 'react-router-dom'

const Entry = ({ entry, handleVote, user}) => {
    const history = useHistory()
    const entry_date = new Date(entry.date)
    const total_date = entry_date.getFullYear() + "/" + 
                        (entry_date.getMonth() + 1) + "/" +
                         entry_date.getDate()

    const vote = (vote) => {
        if (user) {
            handleVote(entry, vote)
        } else {
            history.push('/login')
        }

    }
    return (
        <div className="entry">
            <div className="entry__vote">
                
                    <span>{entry.votes}</span>
                
                <div className="entry__vote__button">
                    <button onClick={() => vote(1)}>
                        <img src={process.env.PUBLIC_URL + '/up-arrow.svg'} alt=""/>
                    </button>
                    <button onClick={() => vote(-1)}>
                        <img src={process.env.PUBLIC_URL + '/down-arrow.svg'} alt=""/>
                    </button>
                </div>
            </div>
            <div className="entry__content">
                {entry.title ? <h2>{entry.title}</h2>: <h2>No Title</h2>}
                <strong>{entry.content}</strong>
                <div className="entry__details">
                    <p className="detail-author">posted by <span>{entry.author}</span></p>
                    <p className="detail-date">{total_date}</p>
                </div>
            </div>
        </div> 
    )
}

export default Entry