import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createSong} from '../../actions/SongActions'
import { default as UUID } from "node-uuid"

class SongInput extends Component {
    constructor(props){
    super(props)
        this.state = {
            title: '',
            artist: '',
            genre: ''
            
        };
    };

    handleOnChange = event => {
        const {name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = event  => {
        event.preventDefault();
        this.props.createSong(this.state)
        this.setState({
            title: '',
            artist: '',
            genre: ''
            
        })
    };

    componentWillMount() {
        this.id = UUID.v4();
    }

    render() {
        
        return(
            <div className="form">
                <form onSubmit={this.handleOnSubmit} >
                    <div id={this.id}>
                    <p>
                    <label htmlFor="song_title">Title:</label>
                    <input 
                    type="text"
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleOnChange}
                    />
                    </p>

                    <p>
                    <label htmlFor="song_artist">Artist:</label>
                    <input 
                    type="text"
                    name="artist" 
                    value={this.state.artist}
                    onChange={this.handleOnChange}
                    />
                    </p>

                    <p>
                    <label htmlFor="song_genre">Genre:</label>
                    <input 
                    type="text"
                    name="genre" 
                    value={this.state.genre}
                    onChange={this.handleOnChange}
                    />
                    </p>
                    </div>
                    <input type="submit" value="Add Song" />
                </form>
            </div>
        );
    }
}



export default connect(null, {createSong} )(SongInput);


