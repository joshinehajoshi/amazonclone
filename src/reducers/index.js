import counterReducer from './counterReducer';
import prodIncrementReducer from './prodIncrementReducer';

import { combineReducers } from 'redux';


const rootReducers = combineReducers(
    {
        counterReducer,
        prodIncrementReducer
    }
)

export default rootReducers