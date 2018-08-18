import {createStore} from 'redux'

import {applyMiddleware} from 'redux'

import thunkMiddleWare from 'redux-thunk'

import reducer from '../ruducers/index'


const state ={
    counter:30,
    todos:0,
    flag:false,
    films:[]
}

const createrStoreWithMiddle = applyMiddleware(
    thunkMiddleWare
)(createStore)



const Store = createrStoreWithMiddle(reducer,state,window.devToolsExtension&& window.devToolsExtension())

export default Store;