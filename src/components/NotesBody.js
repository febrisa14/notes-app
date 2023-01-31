import React from 'react';

function NotesBody({children}) {
    return (
        <div className="note-app__body">
            {children}
        </div>
    );
}

export default NotesBody;