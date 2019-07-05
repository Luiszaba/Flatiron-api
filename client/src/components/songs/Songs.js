import React, { Component } from 'react';
import Song from './Song';

class Songs extends Component {

    render() {
        const { songs } = this.props
        const songList = songs.songs.map(song=> { 
            
        return(
            <ol key={song.id}>
                <Song 
                song={song}
                />
            </ol>
            )
        })

    return (
        <div className="SongList">
                {songList}
        </div>
        )
    }  
}

export default Songs;