import counterReducer from './counterReducer';

import { combineReducers } from 'redux';


const rootReducers = combineReducers(
    {
        counterReducer,
    }
)

export default rootReducers