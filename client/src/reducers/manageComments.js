export default function commentsReducer( state = { loading: false, 
    comments: [] }, action ){

    switch (action.type) {
    
    case 'LOADING_COMMENTS':
        return { ...state, loading: true };
    
    case 'FETCH_COMMENTS': 
        return { loading: false, comments: [ ...action.payload ] };
    
    case "ADD_COMMENT":
        return { ...state, comments: [ ...state.comments, action.payload ] };

    case "DELETE_COMMENT":
        return {comments: state.comments.filter( comment => comment.id !== action.id )}

    default: 
        return state;
    };
};