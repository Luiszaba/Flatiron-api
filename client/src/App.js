import React, { Component } from 'react';
import SongInput from './components/songs/SongInput'
import SongsContainer from './containers/SongsContainer';
import CommentsContainer from './containers/CommentsContainer';
import CommentInput from './components/comments/CommentInput';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'

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
            <div className="create_Comment"><CommentsContainer /></div>
            <div className="songs_Container"><SongsContainer /></div>
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
        <Route exact path="/home" component={Home} />
        <Route exact path="/songs" component={CommentsContainer} />
        <Route exact path="/comment_input" component={CommentInput} />
        <Route exact path="/song_input" component={SongInput} />
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
    return { songs: state.songs,
             comments: state.comments }
}


export default connect(mapStateToProps)(App);
