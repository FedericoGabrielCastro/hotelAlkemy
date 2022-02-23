import { SEARCHING } from "../types/types"

export const initialState = ""

export const setSearchReducer = (state = initialState, { type, search }) => {
    switch (type) {

        case SEARCHING:
            return search

        default:
            return state
    }
}
