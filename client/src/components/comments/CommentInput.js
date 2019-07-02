import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentInput extends Component {
    state = {
        comment: ''
    };
    

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state });
    };


    render() {
        return(
            <div className="form">
                <form onSubmit={event => this.handleOnSubmit(event)} >

                    <p>
                    <label> Add Comment </label>
                        <input
                            type="text"
                            name="comment"
                            value={this.state.text}
                            onChange={event => this.handleOnChange(event)}
                        />
                    </p>
                    <button>Add Comment</button>

                </form>
            </div>
        );
    }
};


export default connect()(CommentInput)