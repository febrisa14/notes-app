import React from 'react';

function NotesForm({ title, body, count, onSubmit, onTitleChangeEventHandler, onBodyChangeEventHandler }) {
    return (
        <form onSubmit={onSubmit}>
            <p className="note-input__title__char-limit">Sisa karakter: {count}</p>
            <input className="note-input__title" type="text" value={title} placeholder="Ini adalah judul ..." required onChange={onTitleChangeEventHandler} />
            <textarea className="note-input__body" type="text" value={body} placeholder="Tuliskan catatanmu di sini ..." required onChange={onBodyChangeEventHandler}></textarea>
            <button type="submit">Buat</button>
        </form>
    );
}

export default NotesForm;