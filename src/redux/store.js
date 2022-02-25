import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'

import { watcherSaga } from "./sagas/rootSaga";

import { composeWithDevTools } from "redux-devtools-extension"

import { getRecipesReducer } from "./reducers/getRecipesReducer";
import { userAuthReducer } from "./reducers/userAuthReducer";
import { setLoadingStatusReducer } from "./reducers/setLoadingStatusReducer"; 
import { setSearchReducer } from "./reducers/setSearchReducer";
import { addRecipeReducer } from "./reducers/addRecipeReducer";

const rootReducers = combineReducers({
    getRecipesReducer: getRecipesReducer, // getting recipes from api 
    userAuthReducer: userAuthReducer, // set status login/logout
    setLoadingStatusReducer: setLoadingStatusReducer, // set loading on/off
    setSearchReducer: setSearchReducer, // set search for recipes items
    addRecipeReducer: addRecipeReducer // add/remove item to menu
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [
    sagaMiddleware
]

export const store = createStore (
    rootReducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(watcherSaga)