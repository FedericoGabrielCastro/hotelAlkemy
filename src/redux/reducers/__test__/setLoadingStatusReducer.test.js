import { setLoadingStatusReducer, initialState } from "../setLoadingStatusReducer";

describe('check Loading reducer', () => {
    
    it('should be return the initial state', () => {
        expect(setLoadingStatusReducer(false, {})).toEqual(initialState)
    });

    it('should test case LOADING with false initial state', () => {
        expect(setLoadingStatusReducer(false, {
            type: "LOADING"
        })).toEqual(true)
    });

    it('should test case LOADING with true initial state', () => {
        expect(setLoadingStatusReducer(true, {
            type: "LOADING"
        })).toEqual(false)
    });
});