import React, { Component } from 'react';
import SongInput from '../components/songs/SongInput';
import Songs from '../components/songs/Songs';
import { connect } from 'react-redux';

class SongsContainer extends Component {
    render() {
        return(
            <div>
                <SongInput 
                addSong={this.props.addSong}
                />
                
                <Songs
                    songs={this.props.songs} 
                    deleteSong={this.props.deleteSong}
                />
            </div>
        )
    }
}

const mapStateToProps = ({songs}) => ({songs})

const mapDispatchToProps = dispatch => ({
    addSong: name => dispatch({type: "ADD_SONG", name }),
    deleteSong: id => dispatch({type: "DELETE_SONG", id})
});


export default connect(mapStateToProps, mapDispatchToProps)(SongsContainer)

