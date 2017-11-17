import {combineReducers} from 'redux';
import authors from './authorReducer';
import courses from './courseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses: courses,
    authors: authors,
    ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
