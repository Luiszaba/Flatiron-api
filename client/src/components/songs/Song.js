import React, { Component } from 'react';


class Song extends Component {

  render() {
    const { song } = this.props;

    return (
      
       
          <ul>
          <li>Song Title: {song.title} </li>
          <li>Song Artist: {song.artist} </li>
          <li>Song Genre: {song.genre} </li>
          <li>Song Length: {song.legnth} </li>
          <br></br>
          </ul>
          
          
        
      
      
    );
  }
};

export default Song;