import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        // let text = this.
    }
    
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" ref={this.messageText} className="form-component" />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>

            
        );
    }
}

export default Chat;