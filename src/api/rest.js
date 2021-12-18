/** @format */

import axios from "axios";
import _ from "lodash";
import { GET_TOKEN_URL, API_URL, API_URL2 } from "../config";
import { POST } from "../utils/apiRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { acc } from "react-native-reanimated";

class Rest {
	constructor() {
		this.endpoint = `${API_URL}`;
		this.token = AsyncStorage.getItem("_token");
	}

	getToken = async () => {
		return await AsyncStorage.getItem("_token");
	};

	request = (method, endpoint, data = {}, param = {}) => {
		return new Promise((rs, rj) => {
			let requestOptions = {
				url: `${API_URL2}${endpoint}`,
				method: method,
				headers: {
					Authorization: `Bearer ${this.getToken()}`,
				},
				withCredentials: true,
				data: data,
				param,
			};
			axios(requestOptions)
				.then((res) => {
					if (_.get(res, "data.errors")) return rj(res.data.errors);
					return rs(res.data);
				})
				.catch((err) => rj(err));
		});
	};
	requestLogin = (method, data) => {
		return new Promise((rs, rj) => {
			let requestOptions = {
				url: `${GET_TOKEN_URL}`,
				method: method,
				headers: {
					Authorization: `Basic SHJlb19BcHA6MXEydzNFKg==`,
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
				},
				withCredentials: true,
				data: data,
			};
			axios(requestOptions)
				.then((res) => {
					if (_.get(res, "data.errors")) return rj(res.error);
					return rs(res.data);
				})
				.catch((err) => rj(err));
		});
	};

	login = async (data) => {
		return this.requestLogin(POST, data)
			.then((res) => {
				console.log(res);
				const { access_token } = res;
				console.log(access_token);
				AsyncStorage.setItem("_token", access_token);

				return Promise.resolve(res);
			})
			.catch((err) => Promise.reject(err));
		// const result = await apiRequest(LOGIN_ENTRY_POINT, POST, values);
	};
}

export default new Rest();
