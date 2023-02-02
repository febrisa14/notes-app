import React from 'react';

function ArchiveButton({ id, onArchive, isArchived }) {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>{isArchived ? "Pindahkan" : "Arsipkan"}</button>
    );
}

export default ArchiveButton;