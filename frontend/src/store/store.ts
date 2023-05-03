import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({})

const store = configureStore({
    reducer: rootReducer
})