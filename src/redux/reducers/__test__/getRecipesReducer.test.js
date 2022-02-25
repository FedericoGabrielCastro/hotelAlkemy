import { getRecipesReducer, initialState } from "../getRecipesReducer";

describe('check GET recipes -reducer', () => {
    
    it('should return the initial state', () => {
        expect(getRecipesReducer(undefined, {}))
            .toEqual(initialState)
    });

    it('should test case GET_RECIPES', () => {

        const initialState = {
            recipes: [
                {
                    nameItemOne: "test",
                    nameItemTwo: "testTwo"
                }
            ]
        }

        expect(getRecipesReducer(initialState, {
            tipe: "GET_RECIPES",
        })).toEqual({
            recipes: [
                {
                    nameItemOne: "test",
                    nameItemTwo: "testTwo"
                }
            ]
        })
    });
});