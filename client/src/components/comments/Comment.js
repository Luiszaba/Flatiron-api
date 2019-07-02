import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

class Comment extends Component {

    handleOnClick = () => {
        this.props.deleteComment(this.props.comment.id)
    }

    render() {
        const { comment } = this.props
        return(

            <div>
                <li>
                    {comment.text}
                </li>
                <button onClick={() => this.deleteComment()}> Delete </button>
                <CommentsContainer comment={comment}/>
            </div>
        );
    }
};

export default Comment;