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
            search: "",
            result: [],
            resultArchived: [],
            isSearched: false,
        }
        this.onDeleteHandlerNotes = this.onDeleteHandlerNotes.bind(this);
        this.onArchiveHandlerNotes = this.onArchiveHandlerNotes.bind(this);
        this.onUnArchiveHandlerNotes = this.onUnArchiveHandlerNotes.bind(this);
        this.onDeleteHandlerArchive = this.onDeleteHandlerArchive.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
    }

    onDeleteHandlerNotes(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        const result = this.state.result.filter(note => note.id !== id);
        this.setState({
            notes: notes,
            result: result,
        });
    }

    onDeleteHandlerArchive(id) {
        const archived = this.state.archived.filter(note => note.id !== id);
        const resultArchived = this.state.resultArchived.filter(note => note.id !== id);
        this.setState({
            archived: archived,
            resultArchived: resultArchived
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
        const updateListResult = this.state.result.map(note => {
            if (note.id === id) {
                return { ...note, archived: true };
            } else {
                return note;
            }
        });
        const notes = updateList.filter(note => note.archived !== true);
        const archived = updateList.filter(note => note.archived !== false);
        const result = updateListResult.filter(note => note.archived !== true);
        const resultArchived = updateListResult.filter(note => note.archived !== false);

        this.setState((prevState) => {
            return {
                archived: [
                    ...prevState.archived, ...archived
                ],
                notes: notes,
                resultArchived: [
                    ...prevState.resultArchived, ...resultArchived
                ],
                result: result
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
        const updateListResultArchived = this.state.resultArchived.map(note => {
            if (note.id === id) {
                return { ...note, archived: false };
            } else {
                return note;
            }
        })
        const findArchived = updateList.filter(note => note.id === id);
        const archived = updateList.filter(note => note.archived !== false);
        const findResultArchived = updateListResultArchived.filter(note => note.id === id);
        const resultArchived = updateListResultArchived.filter(note => note.archived !== false);

        this.setState((prevState) => {
            return {
                archived: archived,
                resultArchived: resultArchived,
                notes: [
                    ...prevState.notes, ...findArchived
                ],
                result: [
                    ...prevState.result, ...findResultArchived
                ]
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
                ],
                result: [
                    ...prevState.result,
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

    onSearchNotesHandler(event) {
        var search = event.target.value;
        const notes = this.state.notes;
        const archived = this.state.archived;

        var resultNotes = [];
        var resultArchived = [];
        var isSearched = this.state.isSearched;
        if (search === "") {
            resultNotes = notes;
            resultArchived = archived;
            isSearched = false;
            search = "";
        } else {
            resultNotes = notes.filter(note => {
                return Object.values(note.title).join('').toLocaleLowerCase().includes(search.toLowerCase())
            });
            resultArchived = archived.filter(note => {
                return Object.values(note.title).join('').toLocaleLowerCase().includes(search.toLowerCase())
            });
            isSearched = true;
        }

        this.setState(() => {
            return {
                search: search,
                result: resultNotes,
                resultArchived: resultArchived,
                isSearched: isSearched
            }
        })
    }

    render() {
        return (
            <>
                <NotesHeader searchNote={this.onSearchNotesHandler} />
                <NotesBody>
                    <NotesInput addNote={this.onAddNotesHandler} />
                    <h2>Catatan Aktif</h2>
                    <NotesList 
                        notes={this.state.notes}
                        result={this.state.result}
                        isSearched={this.state.isSearched}
                        isArchived={false} 
                        onDelete={this.onDeleteHandlerNotes} 
                        onArchive={this.onArchiveHandlerNotes} />
                    <h2>Arsip</h2>
                    <NotesList 
                        notes={this.state.archived} 
                        result={this.state.resultArchived}
                        isSearched={this.state.isSearched}
                        isArchived 
                        onDelete={this.onDeleteHandlerArchive} 
                        onArchive={this.onUnArchiveHandlerNotes} />
                </NotesBody>
            </>
        )
    }
}

export default NotesApp;