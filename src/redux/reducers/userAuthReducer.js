import { USER_LOGIN, USER_LOGOUT } from "../types/types" 

const initialState = true

export const userAuthReducer = (state = initialState, { type, user }) => {
    switch (type) {

        case USER_LOGIN:
            if ( state === false) {
                return user = true
            }
            return state
        case USER_LOGOUT:
            if ( state === true) {
                return user = false
            }
            return state

        default:
            return state
    }
}
