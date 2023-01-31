import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, onArchive, isArchived }) {
    if (notes.length > 0) {
        return (
            <div className="notes-list">
                {
                    notes.map(note => (
                        <NotesItem key={note.id} id={note.id} {...note} isArchived={isArchived} onDelete={onDelete} onArchive={onArchive} />
                    ))
                }
            </div>
        );
    } else {
        return (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        );
    }
}

export default NotesList;