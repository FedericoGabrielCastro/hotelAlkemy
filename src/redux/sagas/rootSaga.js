import { takeLatest } from "redux-saga/effects"

import { GET_RECIPES_SAGA } from "../types/types"
import { getRecipesHandler } from "./handlers/getRecipesSaga"

export function* watcherSaga(){
    
    yield takeLatest(GET_RECIPES_SAGA, getRecipesHandler) // GET RECIPES
}