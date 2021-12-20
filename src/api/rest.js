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

	getToken = () => {
		const value = AsyncStorage.getItem("_token");
		// return AsyncStorage.getItem("_token");
		AsyncStorage.getItem("_token").then((token) => {
			if (token) {
				console.log(token);
				// this.setState({ token: token });
				// 		return token;
			}
		});
		// return value;
	};

	getStorageData = async (state) => {
		try {
			const value = await AsyncStorage.getItem("_token");
			if (value !== null) {
				return await JSON.parse(value);
			}
		} catch (error) {}
		return state;
	};

	async getData() {
		await AsyncStorage.getItem("_token")
			.then((token) => {
				console.log(token);
				this.setState({ token: token });
			})
			.catch((er) => console.log(er));
		// let parsed = JSON.parse(value);
		// return parsed;
	}

	componentDidMount() {
		getData();
	}

	request = (method, endpoint, data = {}, param = {}) => {
		return new Promise((rs, rj) => {
			let requestOptions = {
				url: `${API_URL2}${endpoint}`,
				method: method,
				headers: {
					Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkE5REMzOTY0RDBGMzZFRjE3MTIxNTFGQUM3OTU0ODQ2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2Mzk5MTExOTMsImV4cCI6MTY3MTQ0NzE5MywiaXNzIjoiaHR0cDovLzIwLjg1LjIzNC4xMDk6MTExMiIsImF1ZCI6IkhyZW8iLCJjbGllbnRfaWQiOiJIcmVvX0FwcCIsInN1YiI6IjNhMDBkZTAxLWZlYzYtM2ZjZC1iMDdkLWY2NjlmYjU5MTFjOCIsImF1dGhfdGltZSI6MTYzOTkxMTE5MywiaWRwIjoibG9jYWwiLCJyb2xlIjoiYXBwbGljYW50IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbCI6ImRhdHZuQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJGYWxzZSIsIm5hbWUiOiJkYXR2biIsImlhdCI6MTYzOTkxMTE5Mywic2NvcGUiOlsiYWRkcmVzcyIsImVtYWlsIiwiSHJlbyIsIm9wZW5pZCIsInBob25lIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.VrZRWXZiD4yrspai62wrR7ZSFBTxzhjgKwbvOq-zHL12jxATdvEya2H_GRV3cE8HeVSQnD3-y3nzqLOsie4WDBU4UYIgbyBVcPShsAnRT6Yj_GZi9AYDjZ6KN4wywifwFSHMDonMBFsws6K7sawNqx9IqbVr7AzLARkMIzHJxTplYQuj5SBVPou5vkouA-T59w0gHVrBXTut5eevEVi6_YarkBHmWgRKQPhh-PAwjqQVdSN288qICcpD8RqF5SLK5t7zZ4VWixVcWQebR-VN1IWY0jTDIN9y88_C9Ks0X3m04NL0OUsxdMZLeJE4BtP9xEhxXjYhKz1g1PVoV_z7vA`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				withCredentials: true,
				data,
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
				AsyncStorage.setItem("_token", access_token);
				return Promise.resolve(res);
			})
			.catch((err) => Promise.reject(err));
	};
}

export default new Rest();
