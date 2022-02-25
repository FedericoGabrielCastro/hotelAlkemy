import { userLoginAction, userLogoutAction } from "../userAuthAction";

describe('set user login/logout', () => {
    
    it('should be return userLoginAction', () => {
        const user = false
        const expectation = {
            type: "USER_LOGIN",
            user
        }

        expect(userLoginAction(user)).toEqual(expectation)
    });

    it('should be return userLogoutAction', () => {
        const user = true
        const expectation = {
            type: "USER_LOGOUT",
            user
        }

        expect(userLogoutAction(user)).toEqual(expectation)
    });
});