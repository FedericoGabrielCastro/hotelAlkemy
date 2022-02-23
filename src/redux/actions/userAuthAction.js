import { USER_LOGIN, USER_LOGOUT } from "../types/types";

export const userLoginAction = (user, loading) => ({
    type: USER_LOGIN,
    user,
    loading
})

export const userLogoutAction = (user) => ({
    type: USER_LOGOUT,
    user
})
