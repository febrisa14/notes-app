import React from 'react';
import NotesSearch from './NotesSearch';

function NotesHeader({searchNote}) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NotesSearch searchNote={searchNote} />
        </div>
    );
}

export default NotesHeader;