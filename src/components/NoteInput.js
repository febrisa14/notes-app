import React from 'react';
import NotesForm from './NotesForm';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: "",
                body: ""
            }
        })
    }
    
    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <NotesForm title={this.state.title} body={this.state.body} onSubmit={this.onSubmitEventHandler} onTitleChangeEventHandler={this.onTitleChangeEventHandler} onBodyChangeEventHandler={this.onBodyChangeEventHandler}/>
            </div>
        );
    }
}

export default NotesInput;