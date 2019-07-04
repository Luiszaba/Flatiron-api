export const fetchSongs = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_SONGS' });
      return fetch('http://localhost:3000/api/v1/songs')
        .then(response => response.json())
        .then(responseJSON => {
          dispatch({
            type: 'FETCH_SONGS',
            payload: responseJSON
          })
        });
    };
  }

export const loadingSongs = () => {
    return {
        type: 'LOADING_SONGS'
    }
}

export const createSong = (song) => {
    
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/songs',
    {method: 'POST',
    body: JSON.stringify({
        song: song
    }),
    headers: {
    'Content-Type': 'application/json'
    }})
    .then(response => response.json())
    .then( responseJSON => {
        dispatch({
            type: 'ADD_SONG',
            payload: responseJSON
        })
    })
}}


/*

    const API_URL = process.env.REACT_APP_API_URL;

    console.log(API_URL);
    export const fetchSongs = {
    
        fetchSongs() {
        return fetch(`${API_URL}/api/v1/songs`)
        .then(response => response.json())
    },

    createSong(song) {
        const fetchilizer = {
        method: 'POST',
        body: JSON.stringify({
            song: song
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    }
    return fetch(`${API_URL}/api/vi`, fetchilizer) 
    .then(response  => response.json())
    }   
}
*/