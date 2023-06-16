import {SET_USERS, SHOW_LOADING} from "../constants/Users";

const initState = {
    loading: false,
    usersList: []
}

const users = (state = initState, action) => {
    switch (action.type) {
        case SHOW_LOADING: {
                return {
                    ...state,
                    loading: true
                }
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
                loading: false
            }
        }
        default:
            return state;
    }
}

export default users