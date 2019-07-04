import { combineReducers } from 'redux';
import manageSongs from './manageSongs';
import manageComments from './manageComments';

const rootReducer  = combineReducers({
    songs: manageSongs,
    comments: manageComments
})

export default rootReducer;