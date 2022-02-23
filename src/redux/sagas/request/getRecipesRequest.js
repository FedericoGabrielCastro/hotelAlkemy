import Axios from "axios";

export const getRecipesRequest = () =>  {

    return Axios.request({
        method: "get",
        url: `${process.env.REACT_APP_GET_RECIPES_URL}?apiKey=${process.env.REACT_APP_API_KEY}`
    })
}