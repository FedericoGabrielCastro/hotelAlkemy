import { GET_RECIPES } from "../types/types";

export const initialState = {
    recipes: []
}

export const getRecipesReducer =  (state = initialState, action ) => {
    switch (action.type) {

        case GET_RECIPES:
            const { recipes } = action
            return { ...state, recipes }

        default:
            return state
    }
}
