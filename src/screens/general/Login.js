/** @format */

import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
const Login = ({ navigation }) => {
	const [email, onChangeEmail] = React.useState("");
	const [pass, onChangePass] = React.useState("");

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../../assets/images/logo.png")}
			/>
			<Text style={styles.login}>LOGIN</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeEmail}
				//onChangeText={(email) => this.setState({ email })}
				value={email}
				placeholder='email'
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.input}
				onChangeText={onChangePass}
				//onChangeText={(pass) => this.setState({ pass })}
				value={pass}
				placeholder='password'
				keyboardType='numeric'
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("HPA")}>
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
