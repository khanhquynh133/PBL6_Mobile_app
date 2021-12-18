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
					Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkE5REMzOTY0RDBGMzZFRjE3MTIxNTFGQUM3OTU0ODQ2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2Mzk4NDIyMTYsImV4cCI6MTY3MTM3ODIxNiwiaXNzIjoiaHR0cDovLzIwLjg1LjIzNC4xMDk6MTExMiIsImF1ZCI6IkhyZW8iLCJjbGllbnRfaWQiOiJIcmVvX0FwcCIsInN1YiI6IjNhMDBjNmEzLThmMDAtODExNC1jMmIwLWU0YmMzNzIyNzcxYSIsImF1dGhfdGltZSI6MTYzOTg0MjIxNiwiaWRwIjoibG9jYWwiLCJyb2xlIjoiYWRtaW4iLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOiJGYWxzZSIsImVtYWlsIjoiYWRtaW5AYWJwLmlvIiwiZW1haWxfdmVyaWZpZWQiOiJGYWxzZSIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTYzOTg0MjIxNiwic2NvcGUiOlsiSHJlbyJdLCJhbXIiOlsicHdkIl19.hJI3dQn6IvWiPdfaPLQUbgjiTQpkNLdqrA8RgAikztNpvtCMIPwgWutJRsEZXDXG17idyD5lJmTlVCE2WrHXUyvk8gtpZXGpvdu5EkbTKlDnzwM6e_GOLqBNonFl8d6Eyix14VBKHPn5OqjDFwVMnFeZQEUABpiSpA1807CAxtuQ2YlUM7wKPcQSdWPk8ZMfq5iauSnqqwVTV5Va-CZnLUROTDiJOAzxdjLmULVQ5NQG-1SrP17cQ5Dz_icfcQgfXa9IA2nbbjHhWjGtzKuhazm1vl5sZ4j_nTDzk5XUFxykzj_hduvsERVk4h9ysRwqQ-MuRyOVknjB-QL6sHWGLA`,
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
