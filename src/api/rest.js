/** @format */

import axios from "axios";
import _ from "lodash";
import { GET_TOKEN_URL, API_URL, API_URL2 } from "../config";
import { POST } from "../utils/apiRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Rest {
	constructor() {
		this.endpoint = `${API_URL}`;
		this.token = AsyncStorage.getItem("_token").then((token) => token);
		this.state = {
			token: "",
		};
	}

	getToken = async () => {
		const value = await AsyncStorage.getItem("_token");
		// return AsyncStorage.getItem("_token");
		// AsyncStorage.getItem("_token").then((token) => {
		// 	if (token) {
		// 		// console.log(token);
		// 		// this.setState({ token: token });
		// 		return token;
		// 	}
		// });
		return value;
	};

	getData() {
		const value = AsyncStorage.getItem("_token");
		let parsed = JSON.parse(value);
		return parsed;
	}

	request = (method, endpoint, data = {}, param = {}) => {
		return new Promise((rs, rj) => {
			let requestOptions = {
				url: `${API_URL2}${endpoint}`,
				method: method,
				headers: {
					Authorization: `Bearer ${this.getData()}`,
					Accept: "application/json",
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
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded",
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
				AsyncStorage.setItem("_token", JSON.stringify(access_token));
				return Promise.resolve(res);
			})
			.catch((err) => Promise.reject(err));
	};
}

export default new Rest();
