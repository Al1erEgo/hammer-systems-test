import {AUTH_TOKEN} from "../constants/Auth";
import FirebaseService from "../../services/FirebaseService";
import {showAuthMessage, signInWithFacebookAuthenticated} from "../actions/Auth";
import {SET_USERS} from "../constants/Users";
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';

export function* geUsers() {
    yield takeEvery(SET_USERS, function* () {
        try {
            const user = yield call(FirebaseService.signInFacebookRequest);
            if (user.message) {
                yield put(showAuthMessage(user.message));
            } else {
                localStorage.setItem(AUTH_TOKEN, user.user.uid);
                yield put(signInWithFacebookAuthenticated(user.user.uid));
            }
        } catch (error) {
            yield put(showAuthMessage(error));
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(geUsers),
    ]);
}