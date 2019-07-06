import React, { Component } from 'react';
import Song from './Song';

class Songs extends Component {

    render() {
        const { songs } = this.props
        const songList = songs.songs.map(song => { 
            
        return(
            
            <Song
            key={this.id}
            song={song}
            />
            
            )
        })

    return(
        <div className="SongList">
                {songList}
        </div>
        )
    }  
}

export default Songs;