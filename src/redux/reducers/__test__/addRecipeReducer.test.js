import { addRecipeReducer, initialState } from "../addRecipeReducer"

describe('check add/remove recipes to menu', () => {
    
    it('should be test the initial state', () => {
        expect(addRecipeReducer([],{})).toEqual(initialState)
    });

    it('should test case ADD_RECIPE', () => {

        expect(addRecipeReducer(undefined, {
            type: "ADD_RECIPE",
        }))
    });

    it('should test case DELETE_RECIPE', () => {
        expect(addRecipeReducer(undefined, {
            type: "DELETE_RECIPE",
        }))
    });

});