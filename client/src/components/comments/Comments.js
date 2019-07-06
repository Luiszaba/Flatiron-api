import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    render() {
        const { comments } = this.props;
        const listComments = comments.comments.map(comment => {
            
            return( 
            
            <Comment
            key={this.id}  
            comment={comment} 
            />
        
            )
            }
            )

        return(
            <div className="CommentList">
                {listComments}
            </div>
        )
    }
}

export default Comments;