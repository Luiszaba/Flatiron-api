import React, { Component } from 'react';
import Song from './Song';

class Songs extends Component {

    render() {
        const { songs } = this.props
        const songList = songs.songs.map((song) =>
            
            <ul key={song.id}>
            <Song 
            song={song}
            />
            </ul>
            
        )

    return(
        <div className="SongList">
                {songList}
        </div>
        )
    }  
}

export default Songs;