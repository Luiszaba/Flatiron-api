import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    
    render() {
        const { comments, deleteComment } = this.props;
        const listComments = comments.filter(comment => {
            return(
                <Comment
                    key={comment.id} 
                    comment={comment} 
                    deleteComment={deleteComment} 
                 />
                ) 
            }
        )
        return(
            <div>
                <ul>
                    {listComments}
                </ul>
            </div>
        )
    }
}

export default Comments;
