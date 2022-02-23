import { GET_RECIPES, GET_RECIPES_SAGA } from "../types/types";

export const getRecipesSagaAction = () => ({
    type: GET_RECIPES_SAGA,
})

export const getRecipesAction = (recipes) => ({
    type: GET_RECIPES,
    recipes
})

