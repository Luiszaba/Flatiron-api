export const fetchSongs = () => {
  console.log("c")
    return (dispatch) => {
      dispatch({ type: 'LOADING_SONGS' });
      return fetch('http://localhost:3000/api/v1/songs')
        .then(response => response.json())
        .then(responseJSON => {
          dispatch({
            type: 'FETCH_SONGS',
            payload: responseJSON
          })
          console.log('e')
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