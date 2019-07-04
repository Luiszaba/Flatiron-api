import React, { Component } from 'react';

class Comment extends Component {

    render() {
        const { comment } = this.props

        return(

                <ul>
                    <li>{comment.comment}</li>
                </ul>
        );
    }
};

export default Comment;