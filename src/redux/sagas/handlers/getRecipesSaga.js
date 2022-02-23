import { call, put } from "redux-saga/effects";

import { getRecipesRequest } from "../request/getRecipesRequest";
import { getRecipesAction } from "../../actions/getRecipesAction";

export function* getRecipesHandler () {

    try { 
        const response = yield call(getRecipesRequest)
        const { data } = response
        yield put(getRecipesAction(data.results))
    } catch (error) {
        console.log("getRecipesHandler", error)
    }
}