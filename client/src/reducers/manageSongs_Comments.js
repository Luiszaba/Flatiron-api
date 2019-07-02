import {combineReducers } from 'redux';


const rootReducer = combineReducers({
    songs: songsReducer,
    comments: commentsReducer
});

export default rootReducer

function songsReducer( state = [], action) {
    let idx;
    
    switch (action.type) {

    case "ADD_SONG":
        return [...state, action.song ];

    case "DELETE_SONG":
        idx = state.indexOf(action.id);
        return [ ...state.slice(0, idx), ...state.slice(idx +1 )]
     
        default:
        return state
    }
}

function commentsReducer( state =[], action ){
    let idx;

    switch(action.type) {
    case "ADD_COMMENT":
        return [...state, action.comment];
         
    case "REMOVE_COMMENT":
        idx = state.indexOf(action.id)
        return [...state.slice(0, idx), ...state.slice( idx + 1) ];

        default: 
        return state
    }
}