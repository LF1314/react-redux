import {combineReducers} from "redux"

import counter from './counter'
import todos from './todos'
import flag from './loading'
import  films  from './films'

const reducer = combineReducers(
    {
        counter,
        todos,
        flag,
        films
    }
)
export default reducer;