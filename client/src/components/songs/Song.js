import React, { Component } from 'react';


class Song extends Component {

  render() {
    const { song } = this.props;

    return (
          <ul>
          <li>Title: {song.title} </li>
          <li>Artist: {song.artist} </li>
          <li>Genre: {song.genre} </li>
          <br></br>
          </ul>
    );
  }
};

export default Song;