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
                title: event.target.value.slice(0, 50)
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
        const count = 50;
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <NotesForm count={count-this.state.title.length} 
                    title={this.state.title} 
                    body={this.state.body} 
                    onSubmit={this.onSubmitEventHandler} 
                    onTitleChangeEventHandler={this.onTitleChangeEventHandler} 
                    onBodyChangeEventHandler={this.onBodyChangeEventHandler} />
            </div>
        );
    }
}

export default NotesInput;