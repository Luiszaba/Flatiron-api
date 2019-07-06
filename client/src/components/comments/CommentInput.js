import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createComment} from '../../actions/CommentActions'
import { default as UUID } from "node-uuid"


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
        this.props.createComment(this.state)
        this.setState({
            comment: ''
        })
    };

    componentWillMount() {
        this.id = UUID.v4();
    }

    render() {
    
        return(
            <div className="form">
                <form onSubmit={this.handleOnSubmit} >
                    
                    <p>
                    <label htmlFor="comment"> Add Comment: </label>
                        <textarea
                        id={this.id}
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