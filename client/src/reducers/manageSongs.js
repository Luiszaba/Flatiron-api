export default function songsReducer( state = { loading: false, 
    songs: [] }, action ) {
    
    switch (action.type) {
    
    case 'LOADING_SONGS':
        return { ...state, loading: true };
    
    case 'FETCH_SONGS': 
        return { loading: false, songs: [...action.payload ] };
    
    case "ADD_SONG":
        return { ...state, songs: [ ...state.songs, action.song ] };

    default:
        return state;
    };
};

