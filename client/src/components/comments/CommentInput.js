import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createComment} from '../../actions/CommentActions'

class CommentInput extends Component {
    constructor(props) {
    super(props)
        this.state = {
        comment: ''
        };
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
    
        return(
            <div className="form">
                <form onSubmit={this.handleOnSubmit} >
                    <p>
                    <label htmlFor="comment"> Add Comment: </label>
                        <input
                        type="text"
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleOnChange}
                        />
                    </p>
                    <input type="submit" value="Add Comment"/>
                </form>
            </div>
        );
    }
}


export default connect(null, {createComment} )(CommentInput)