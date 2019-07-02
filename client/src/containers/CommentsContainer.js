import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import Comments from '../components/comments/Comments';
import { connect } from 'react-redux';

class CommentsContainer extends Component {
    render() {
        return(
            <div>
                <CommentInput 
                    addComment={this.props.addComment}
                />
                
                <Comments 
                    comments={this.props.comments} 
                    deleteComment={this.props.deleteComment}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({comments: state.props });

const mapDispatchToProps = dispatch => ({
    addComment: name => dispatch({type: "ADD_COMMENT", name }),
    deleteComment: id => dispatch({type: "DELETE_COMMENT", id})
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)