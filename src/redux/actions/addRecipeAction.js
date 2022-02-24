import { ADD_RECIPE, DELETE_RECIPE } from "../types/types";

export const addRecipeAction = (id) => ({
    type: ADD_RECIPE,
    id
})

export const removeRecipeAction = (id) => ({
    type: DELETE_RECIPE,
    id
})
