/** @format */

import { all, call, put, takeEvery } from "redux-saga/effects";
import { SET_CURRENT_USER, INIT_APP_2, INIT_APP } from "../types";
import rest from "../api/rest";
// import { GET_TOKEN_URL } from "../config";
import { GET, USER_INFORMATION_ENTRY_POINT } from "../utils/apiRequest";
import { AsyncStorage } from "react-native-community/async-storage";

function* initApp() {
	var user = yield call(() => {
		rest
			.request(GET, USER_INFORMATION_ENTRY_POINT)
			.then((res) => res.userAbp)
			.catch((err) => {
				AsyncStorage.removeItem("_token");
				return null;
			});
	});
	yield put({
		type: SET_CURRENT_USER,
		payload: user,
	});
	yield put({
		type: INIT_APP,
	});
}

export default function* rootSaga() {
	yield all([takeEvery(INIT_APP_2, initApp), call(initApp)]);
}
