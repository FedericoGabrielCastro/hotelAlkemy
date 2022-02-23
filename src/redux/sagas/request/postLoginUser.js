import Axios from "axios";

export const postLoginUserRequest = () =>  {

    return Axios.request({
        method: "post",
        url: `${process.env.REACT_APP_POST_USER_URL}`
    })
}