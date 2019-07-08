import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import Comments from '../components/comments/Comments';
import { fetchComments } from '../actions/CommentActions'
import  {createComment} from '../actions/CommentActions'
import { connect } from 'react-redux';

class CommentsContainer extends Component {

    componentDidMount(){
        this.props.fetchComments()

    }



    render() {
        return(
            <div className="createDisplay">
                <div className="commentCreation">
                    <CommentInput addComment={this.props.createComment}/>
                </div>
                
                <div className="commentProps">
                    <Comments comments={this.props.comments} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => { return { comments: state.comments} }


export default connect(mapStateToProps, {fetchComments, createComment} )(CommentsContainer)