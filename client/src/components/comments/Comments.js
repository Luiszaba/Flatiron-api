import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    
    render() {
        const { comments, deleteComment } = this.props;
        const listComments = comments.map(comment => {
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
                <li>
                    {listComments}
                </li>
            </div>
        )
    }
}

export default Comments;
