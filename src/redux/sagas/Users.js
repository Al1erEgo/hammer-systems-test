import {GET_USERS} from "../constants/Users";
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import usersService from "../../services/UsersService";
import {hideUsersLoading, setUsers, showUsersLoading} from "../actions/Users";

export function* getUsers() {
    yield takeEvery(GET_USERS, function* () {
        try {
            yield put(showUsersLoading())
            const users = yield call(usersService.getUsers);
            yield put(setUsers(users));
            yield put(hideUsersLoading())
        } catch (error) {
            yield put(hideUsersLoading())
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(getUsers),
    ]);
}