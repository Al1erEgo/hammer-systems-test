import {SET_USERS, SHOW_USERS_LOADING, HIDE_USERS_LOADING} from "../constants/Users";

const initState = {
    loading: false,
    usersList: []
}

const users = (state = initState, action) => {
    switch (action.type) {
        case SHOW_USERS_LOADING: {
                return {
                    ...state,
                    loading: true
                }
            }
        case HIDE_USERS_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersList: action.users,
                loading: false
            }
        }
        default:
            return state;
    }
}

export default users