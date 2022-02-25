import { ADD_RECIPE, DELETE_RECIPE } from "../types/types";

export const addRecipeAction = (menu) => ({
    type: ADD_RECIPE,
    menu
})

export const removeRecipeAction = (menu) => ({
    type: DELETE_RECIPE,
    menu
})
