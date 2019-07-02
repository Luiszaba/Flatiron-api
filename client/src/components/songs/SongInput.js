import React, { Component } from 'react';
import { connect } from 'react-redux';


class SongInput extends Component {
    constructor(props){
    super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            legnth: ''
        };
    }

    handleOnChange = event => {
        const {name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = event  => {
        event.preventDefault();
        this.props.addSong(this.state.name)
        this.setState({
            title: '',
            artist: '',
            genre: '',
            legnth: ''
        })
    };

    render() {
        console.log(this.state)
        return(
            <div className="form">
                <form onSubmit={this.handleOnSubmit} >
                    
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

                    <p>
                    <label htmlFor="song_length">Song Legnth:</label>
                    <input 
                    type="text"
                    name="legnth" 
                    value={this.state.legnth}
                    onChange={this.handleOnChange}
                    />
                    </p>

                    <input type="submit" value="Add Song" />
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addSong: formData => dispatch({type: 'ADD_SONG', payload: formData})
    };
};

export default connect(null, mapDispatchToProps)(SongInput);


