import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentInput extends Component {
    state = {
        comment: ''
    };
    

    handleOnChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            comment: ''
        })
    };

    render() {
        console.log(this.state)
        return(
            <div className="form">
                <form onSubmit={this.handleOnSubmit} >
                    <p>
                    <label> Add Comment </label>
                        <input
                        type="text"
                        name="comment"
                        value={this.state.text}
                        onChange={this.handleOnChange}
                        />
                    </p>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addComment: formData => dispatch({type: 'ADD_COMMENT', payload: formData})
    };
};

export default connect(null, mapDispatchToProps)(CommentInput)