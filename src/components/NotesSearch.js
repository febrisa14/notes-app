import React from 'react';

function NotesSearch({ searchNote }) {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari catatan ..." onChange={searchNote}></input>
        </div>
    );
}

export default NotesSearch;