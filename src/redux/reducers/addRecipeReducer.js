import { ADD_RECIPE, DELETE_RECIPE } from "../types/types"

export const initialState = []

export const addRecipeReducer = (state = initialState, { type, menu }) => {
    switch (type) {

        case ADD_RECIPE: 
            {
                const newState = [...state]
                newState.push(menu)
                return newState
            }
        case DELETE_RECIPE: 
            {
                const newState = [...state]
                newState.splice(item => item !== menu)
                return newState
            }

        default:
            return state
    }
}
