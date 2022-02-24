import { ADD_RECIPE, DELETE_RECIPE } from "../types/types"

const initialState = {
    menu: []
}

export const addRecipeReducer = (state = initialState, { type, id }) => {
    switch (type) {

        case ADD_RECIPE:
            return { 
                ...state, 
                menu: [ ...state.menu, payload.id] 
            }
        case REMOVE_RECIPE:
            return { 
                ...state,
                menu: state.menu.filter(recipes => recipes.id !== payload.id)
            }

        default:
            return state
    }
}
