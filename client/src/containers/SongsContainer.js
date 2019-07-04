import React, { Component } from 'react';
import SongInput from '../components/songs/SongInput';
import Songs from '../components/songs/Songs';
import { fetchSongs } from '../actions/SongActions'
import { connect } from 'react-redux';

class SongsContainer extends Component {

    componentDidMount() {
        this.props.fetchSongs()
    }
    

    render() {
        return(
        <div className ="SongsContainer">
                <div className="SongInput">
                    <SongInput 
                        addSong={this.props.addSong}
                    />
                </div>

                <div className="Songs">
                    <Songs
                        songs={this.props.songs} 
                    />
                </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {songs: state.songs }
}

const mapDispatchToProps = dispatch => ({
    addSong: name => dispatch({type: "ADD_SONG", name }),
    fetchSongs: () => { dispatch(fetchSongs()) }
});


export default connect(mapStateToProps, mapDispatchToProps)(SongsContainer)

