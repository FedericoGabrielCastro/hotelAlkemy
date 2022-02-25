import { addRecipeAction, removeRecipeAction } from '../addRecipeAction'

describe('add/remove recipe action', () => {
    
    it('should test addRecipeAction ', () => {
        const menu = []
        const expectation = {
            type: "ADD_RECIPE",
            menu
        }
    
        expect(addRecipeAction(menu)).toEqual(expectation)
    });

    it('should test removeRecipeAction', () => {
        const menu = []
        const expectation = {
            type: "DELETE_RECIPE",
            menu
        }
    
        expect(removeRecipeAction(menu)).toEqual(expectation)
    });
});