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
                <div className="CommentInput">
                <CommentInput 
                    addComment={this.props.addComment}
                />
                </div>
                <div className="Comments">
                <Comments 
                    comments={this.props.comments} 
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return { comments: state.comments} 
}

const mapDispatchToProps = dispatch => ({
    addComment: name => dispatch({type: "ADD_COMMENT", name }),
    fetchComments: () => { dispatch(fetchComments()) }
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)