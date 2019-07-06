import React, { Component } from 'react';

class Comment extends Component {

    render() {
        return(
                <ul>               
                "{this.props.comment.comment}"
                <br></br>
                </ul>
        );
    }
};

export default Comment;