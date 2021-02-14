import React, { useState } from 'react'
const EntryForm = ({ createEntry }) => {

    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')

    const addEntry = (event) => {
        event.preventDefault()

        createEntry({
            title,
            content,
            author,
            votes: 0
        })

        setContent('')
        setAuthor('')
        setTitle('')
    }
    return (
        
            <form onSubmit={addEntry} className="form">
            <h2>Create whatever you want</h2>
                <div className="form-part">
                    <label>Title</label>
                    <input type="text" value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-part">
                    <label>Content</label>
                    <textarea name="Text1" cols="40" rows="5" value={content}
                        onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className="form-part">
                    <label>Author</label>
                    <input type="text" value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type="submit" className="btn">
                    Create Entry
                </button>
            </form>


    )
}

export default EntryForm