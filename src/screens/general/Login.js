/** @format */

import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import rest from "../../api/rest";
import { USER_INFORMATION_ENTRY_POINT, GET } from "../../utils/apiRequest";
import * as Notifications from "expo-notifications";

const Login = ({ navigation }) => {
	const [dataLogin, setDataLogin] = useState({
		username: "",
		password: "",
	});

	const handleChange = async () => {
		const data = {
			username: dataLogin.username, //'admin',
			password: dataLogin.password, //'1q2w3E*',
			scope: "Hreo",
			grant_type: "password",
		};
		console.log("data :>> ", data);
		var formBody = [];
		for (var property in data) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(data[property]);
			formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

		dataLogin.grant_type = "password";
		let s = new URLSearchParams(Object.entries(dataLogin)).toString();
		console.log(dataLogin, s);
		try {
			const { status } = await Notifications.getPermissionsAsync();
			if (status != "granted") {
				const { status } = await Notifications.requestPermissionsAsync();

				if (status != "granted") {
					alert("Lấy token thất bại");
					return;
				}
			}
			token = (await Notifications.getExpoPushTokenAsync()).data;
			console.log(token);
			await rest
				.login(formBody)
				.then((res) => {
					console.log(res);
					rest
						.request(GET, USER_INFORMATION_ENTRY_POINT)
						.then((res) => {
							console.log(res);
							navigation.navigate("HPA");
						})
						.catch((err) => console.log(err));
				})
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	};

	// const handleLogin = async () => {
	// 	const rs = await rest.login(dataLogin);
	// 	console.log(rs);
	// };

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../../assets/images/logo.png")}
			/>

			<Text style={styles.login}>LOGIN</Text>
			<TextInput
				name='username'
				style={styles.input}
				// onChangeText={handleChange}
				onChangeText={(text) =>
					setDataLogin({
						...dataLogin,
						username: text,
					})
				}
				value={dataLogin.username}
				placeholder='Email or Username'
			/>
			<TextInput
				name='password'
				secureTextEntry={true}
				style={styles.input}
				// onChangeText={handleChange}
				onChangeText={(text) =>
					setDataLogin({
						...dataLogin,
						password: text,
					})
				}
				value={dataLogin.password}
				placeholder='password'
			/>

			{/* <TouchableOpacity style={styles.button}>
				<Button
					onPress={handleChange}
					style={styles.textBtn}
					title='LOGIN'></Button>
			</TouchableOpacity> */}
			<TouchableOpacity style={styles.button} onPress={handleChange}>
				<Text style={styles.textBtn}>CONTINUE</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate("Register")}>
				<Text style={styles.baseText}>
					Dont have account? Create an account
				</Text>
			</TouchableOpacity>
		</View>
	);
};
export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E0FFFF",
		alignItems: "center", //giữa trang
		justifyContent: "center",
	},
	logo: {
		width: 60,
		height: 60,
		marginBottom: 20,
	},
	login: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#426EB4",
		marginBottom: 25,
	},
	baseText: {
		fontWeight: "bold",
		fontSize: 10,
		color: "#426EB4",
		marginTop: 10,
	},
	input: {
		height: 40,
		margin: 12,
		borderBottomWidth: 1,
		padding: 10,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#426EB4",
		padding: 10,
		height: 35,
		width: 130,
		borderRadius: 20,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 30,
		marginBottom: 15,
	},
	textBtn: {
		fontWeight: "bold",
		fontSize: 16,
		color: "#FFF",
		textAlign: "center",
	},
});

// /** @format */

// import React from "react";
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	Image,
// 	TextInput,
// 	TouchableOpacity,
// } from "react-native";
// const Login = ({ navigation }) => {
// 	const [email, onChangeEmail] = React.useState("");
// 	const [pass, onChangePass] = React.useState("");

// 	return (
// 		<View style={styles.container}>
// 			<Image
// 				style={styles.logo}
// 				source={require("../../assets/images/logo.png")}
// 			/>
// 			<Text style={styles.login}>LOGIN</Text>
// 			<TextInput
// 				style={styles.input}
// 				onChangeText={onChangeEmail}
// 				//onChangeText={(email) => this.setState({ email })}
// 				value={email}
// 				placeholder='email'
// 			/>
// 			<TextInput
// 				secureTextEntry={true}
// 				style={styles.input}
// 				onChangeText={onChangePass}
// 				//onChangeText={(pass) => this.setState({ pass })}
// 				value={pass}
// 				placeholder='password'
// 				keyboardType='numeric'
// 			/>
// 			<TouchableOpacity
// 				style={styles.button}
// 				onPress={() => navigation.navigate("HPA")}>
// 				<Text style={styles.textBtn}>CONTINUE</Text>
// 			</TouchableOpacity>
// 			<TouchableOpacity onPress={() => navigation.navigate("Register")}>
// 				<Text style={styles.baseText}>
// 					Dont have account? Create an account
// 				</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// };
// export default Login;
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#E0FFFF",
// 		alignItems: "center", //giữa trang
// 		justifyContent: "center",
// 	},
// 	logo: {
// 		width: 60,
// 		height: 60,
// 		marginBottom: 20,
// 	},
// 	login: {
// 		fontWeight: "bold",
// 		fontSize: 30,
// 		color: "#426EB4",
// 		marginBottom: 25,
// 	},
// 	baseText: {
// 		fontWeight: "bold",
// 		fontSize: 10,
// 		color: "#426EB4",
// 		marginTop: 10,
// 	},
// 	input: {
// 		height: 40,
// 		margin: 12,
// 		borderBottomWidth: 1,
// 		padding: 10,
// 	},
// 	button: {
// 		alignItems: "center",
// 		backgroundColor: "#426EB4",
// 		padding: 10,
// 		height: 35,
// 		width: 130,
// 		borderRadius: 20,
// 		marginLeft: 50,
// 		marginRight: 50,
// 		marginTop: 30,
// 		marginBottom: 15,
// 	},
// 	textBtn: {
// 		fontWeight: "bold",
// 		fontSize: 16,
// 		color: "#FFF",
// 		textAlign: "center",
// 	},
// });
