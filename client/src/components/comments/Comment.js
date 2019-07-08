import React, { Component } from 'react';

class Comment extends Component {

    render() {
        return(
            <div className="organizedCommentList">
                <ul > 
                                  
                "{this.props.comment.comment}"
                <br></br>
                </ul>
            </div>
        );
    }
};

export default Comment;