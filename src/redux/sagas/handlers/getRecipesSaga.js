import { call, put } from "redux-saga/effects";
import swal from 'sweetalert';

import { getRecipesRequest } from "../request/getRecipesRequest";
import { getRecipesAction } from "../../actions/getRecipesAction";

export function* getRecipesHandler () {

    try { 
        const response = yield call(getRecipesRequest)
        const { data } = response
        yield put(getRecipesAction(data.results))
    } catch (error) {
        swal("Error 402 ", "Try another day", "error");
    }
}