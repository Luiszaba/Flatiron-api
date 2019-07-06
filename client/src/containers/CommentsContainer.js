import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import Comments from '../components/comments/Comments';
import { fetchComments } from '../actions/CommentActions'
import { connect } from 'react-redux';

class CommentsContainer extends Component {

    componentDidMount(){
        this.props.fetchComments()
    }

    render() {
        return(
                <div>
                    <CommentInput addComment={this.props.addComment}/>                
                    <Comments comments={this.props.comments} />
                </div>
        )
    }
}

const mapStateToProps = state => { return { comments: state.comments} }

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch({type: "ADD_COMMENT", comment }),
    fetchComments: () => { dispatch(fetchComments()) }
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)