import React from 'react';
import NotesHeader from './NotesHeader';
import { getInitialData } from '../utils/data';
import NotesList from './NotesList';
import NotesBody from './NotesBody';
import NotesInput from './NoteInput';

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
            archived: [],
        }
        this.onDeleteHandlerNotes = this.onDeleteHandlerNotes.bind(this);
        this.onArchiveHandlerNotes = this.onArchiveHandlerNotes.bind(this);
        this.onUnArchiveHandlerNotes = this.onUnArchiveHandlerNotes.bind(this);
        this.onDeleteHandlerArchive = this.onDeleteHandlerArchive.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandlerNotes(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({
            notes: notes,
        });
    }

    onDeleteHandlerArchive(id) {
        const archived = this.state.archived.filter(note => note.id !== id);
        this.setState({
            archived: archived,
        })
    }

    onArchiveHandlerNotes(id) {
        const updateList = this.state.notes.map(note => {
            if (note.id === id) {
                return { ...note, archived: true };
            } else {
                return note;
            }
        });
        const notes = updateList.filter(note => note.archived !== true);
        const archived = updateList.filter(note => note.archived !== false);

        this.setState((prevState) => {
            return {
                archived: [
                    ...prevState.archived, ...archived
                ],
                notes: notes
            }
        })
    }

    onUnArchiveHandlerNotes(id) {
        const updateList = this.state.archived.map(note => {
            if (note.id === id) {
                return { ...note, archived: false };
            } else {
                return note;
            }
        });
        const findArchived = updateList.filter(note => note.id === id);
        const archived = updateList.filter(note => note.archived !== false);

        this.setState((prevState) => {
            return {
                archived: archived,
                notes: [
                    ...prevState.notes, ...findArchived
                ],
            }
        })
    }

    onAddNotesHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    render() {
        return (
            <>
                <NotesHeader />
                <NotesBody>
                    <NotesInput addNote={this.onAddNotesHandler} />
                    <h2>Catatan Aktif</h2>
                    <NotesList notes={this.state.notes} isArchived={false} onDelete={this.onDeleteHandlerNotes} onArchive={this.onArchiveHandlerNotes} />
                    <h2>Arsip</h2>
                    <NotesList notes={this.state.archived} isArchived onDelete={this.onDeleteHandlerArchive} onArchive={this.onUnArchiveHandlerNotes} />
                </NotesBody>
            </>
        )
    }
}

export default NotesApp;