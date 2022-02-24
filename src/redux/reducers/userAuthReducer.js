import { USER_LOGIN, USER_LOGOUT } from "../types/types" 

const initialState = false

export const userAuthReducer = (state = initialState, { type, user }) => {
    switch (type) {

        case USER_LOGIN: 
            {
                const newState = user 
                window.localStorage.setItem("USER_TOKEN", JSON.stringify(newState))
                return !newState
            }
        case USER_LOGOUT: 
            {
                const newState = user 
                window.localStorage.removeItem("USER_TOKEN", JSON.stringify(newState))
                return !newState
            }

        default:
            return state
    }
}
