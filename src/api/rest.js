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
					Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkE5REMzOTY0RDBGMzZFRjE3MTIxNTFGQUM3OTU0ODQ2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2Mzk4NDY3MjAsImV4cCI6MTY3MTM4MjcyMCwiaXNzIjoiaHR0cDovLzIwLjg1LjIzNC4xMDk6MTExMiIsImF1ZCI6IkhyZW8iLCJjbGllbnRfaWQiOiJIcmVvX0FwcCIsInN1YiI6IjNhMDBkZTAxLWZlYzYtM2ZjZC1iMDdkLWY2NjlmYjU5MTFjOCIsImF1dGhfdGltZSI6MTYzOTg0NjcyMCwiaWRwIjoibG9jYWwiLCJyb2xlIjoiYXBwbGljYW50IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbCI6ImRhdHZuQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJGYWxzZSIsIm5hbWUiOiJkYXR2biIsImlhdCI6MTYzOTg0NjcyMCwic2NvcGUiOlsiYWRkcmVzcyIsImVtYWlsIiwiSHJlbyIsIm9wZW5pZCIsInBob25lIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.bLWxR5_bLjd0Rn8O7T9xgv-SvEIxiOXGGaV8ZFxrSaDfpVPi7YpIv7-xLyY69t1mLDWNE5MIEO35lPIrUQzPb9yYXWWwrRRLYuRPnjnHS-IStIgso6OQw4Kwhb5pa3gHUA388wAmZlkAXzbXoGbDcFVFull5pulTreXOjbZQ6J799GRil4KEr54MsT5VlbZCRifQYqFHKQHnXHySS5azZols9HGFqWeEDZ5bYopUio28hgqNB8NcZ4wXSMRiW-yrcJBK1Swp9Uwb2JMEIN353-dsvHZ1v4-Ef-QP0vMQkaq5Xq7onFtc1sCjMa8pbyzBVD-9Y5h2omCPRny4zfv2Iw`,
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
