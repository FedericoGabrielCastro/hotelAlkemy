import { getRecipesSagaAction, getRecipesAction } from "../getRecipesAction";

describe('get recipes actions', () => {
    
    it('should be return getRecipesSagaAction', () => {
        const expectation = {
            type: "GET_RECIPES_SAGA"
        }

        expect(getRecipesSagaAction()).toEqual(expectation)
    });

    it('should be return getRecipesAction', () => {
        const recipes = []
        const expectation = {
            type: "GET_RECIPES",
            recipes 
        }

        expect(getRecipesAction(recipes)).toEqual(expectation)
    });

});