import React from 'react';
import NotesItemAction from './NotesItemAction';
import NotesItemContent from './NotesItemContent';

function NotesItem({ id, title, body, createdAt, onDelete, onArchive, isArchived }) {
    return (
        <div className="note-item">
            <NotesItemContent id={id} title={title} body={body} createdAt={createdAt} />
            <NotesItemAction id={id} onDelete={onDelete} isArchived={isArchived} onArchive={onArchive} />
        </div>
    );
}

export default NotesItem;