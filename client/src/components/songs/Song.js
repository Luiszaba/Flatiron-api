import React, { Component } from 'react';


class Song extends Component {

  render() {
    return (
          <div>
          <br></br>
            <li>Title: {this.props.song.title} </li>
            <li>Artist: {this.props.song.artist} </li>
            <li>Genre: {this.props.song.genre} </li>
          <br></br>
          </div>
          
    );
  }
};

export default Song;