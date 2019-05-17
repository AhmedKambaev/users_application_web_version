
import { combineReducers } from 'redux';
import user from './user';
import books from './books';
import videos from './videos';


export default combineReducers({
    user,
    books,
    videos
});




