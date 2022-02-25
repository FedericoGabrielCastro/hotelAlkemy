import { USER_LOGIN, USER_LOGOUT } from "../types/types";

export const userLoginAction = (user) => ({
    type: USER_LOGIN,
    user,    
})

export const userLogoutAction = (user) => ({
    type: USER_LOGOUT,
    user
})
