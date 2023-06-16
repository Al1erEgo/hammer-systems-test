import {
    GET_USERS,
    HIDE_USERS_LOADING,
    SET_USERS,
    SHOW_USERS_LOADING
} from "../constants/Users";

export const showUsersLoading = () => {
    return {
        type: SHOW_USERS_LOADING,
    };
};

export const hideUsersLoading = () => {
    return {
        type: HIDE_USERS_LOADING,
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

export const getUsers = () => {
    return {
        type: GET_USERS,
    };
};