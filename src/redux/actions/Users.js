import {SET_USERS, SHOW_LOADING} from "../constants/Users";

export const showLoading = () => {
    return {
        type: SHOW_LOADING,
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};