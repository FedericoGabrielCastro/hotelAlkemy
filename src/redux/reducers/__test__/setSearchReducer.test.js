import { setSearchReducer, initialState } from "../setSearchReducer";

describe('check searching', () => {
    
    it('should return the initial state', () => {
        expect(setSearchReducer("", {})).toEqual(initialState)
    });

    it('should test case SEARCHING pasing a text', () => {

        const initialState = "any text"

        expect(setSearchReducer(undefined, {
            type: "SEARCHING",
            search: "any text"
        })).toEqual(initialState)
    });
});