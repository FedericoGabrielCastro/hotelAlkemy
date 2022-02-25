import { LOADING } from "../types/types"

export const initialState = false

export const setLoadingStatusReducer = (state = initialState, { type, loading }) => {
    switch (type) {

        case LOADING:
            if ( state === false) {
                return loading = true
            } else {
                return loading = false
            }
        default:
            return state
    }
}
