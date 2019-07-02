import React, { Component } from 'react';
import Songs from './components/songs/Songs';
import SongInput from './components/songs/SongInput'
import Comments from './components/comments/Comments';
import CommentInput from './components/comments/CommentInput';
import NavBar from './components/NavBar';
import CommentsContainer from './containers/CommentsContainer'
import SongsContainer from './containers/SongsContainer'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      comment: []
    }
  }

  render() {
    return(
      <div className="app">
        <h1>Albums App</h1>
          <div className="AppPage">
            
            <div className="navbar"><Nav/></div>
            <div className="createComment"><CommentsContainer /></div>
            <div className="songsContainer"><SongsContainer /></div>
          </div>
      </div>
    )
  }
}


const Nav = () => {
  return(
    <Router>
      <div className="navbar">
        <NavBar />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/comment_input" component={CommentInput} />
        <Route exact path="/song_input" component={SongInput} />
        <Route exact path="/songs" component={Songs} />
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
    return { songs: state.songs,
             comments: state.comment }
}
  

export default connect(mapStateToProps)(App);
