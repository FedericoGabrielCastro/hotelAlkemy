import { userAuthReducer, initialState } from "../userAuthReducer";

describe('check the user login/logout', () => {
    
    it('should test the initial state', () => {
        expect(userAuthReducer(false ,{})).toEqual(initialState)
    });

    it('should test case USER_LOGIN', () => {
        expect(userAuthReducer(undefined, {}))
    });

    it('should test case USER_LOGOUT', () => {
        expect(userAuthReducer(undefined, {}))
    });
});