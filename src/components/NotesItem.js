import React from 'react';
import NotesAction from './NotesAction';
import NotesContent from './NotesContent';

function NotesItem({ id, title, body, createdAt, onDelete, onArchive, isArchived }) {
    return (
        <div className="note-item">
            <NotesContent id={id} title={title} body={body} createdAt={createdAt} />
            <NotesAction id={id} onDelete={onDelete} isArchived={isArchived} onArchive={onArchive} />
        </div>
    );
}

export default NotesItem;