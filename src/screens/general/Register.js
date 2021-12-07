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
import { useFonts } from "expo-font";
const Register = ({ navigation }) => {
	const [name, onChangeName] = React.useState("");
	const [email, onChangeEmail] = React.useState("");
	const [pass, onChangePass] = React.useState("");
	const [text, onChangeText] = React.useState("Useless Text");

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../../assets/images/logo.png")}
			/>
			<Text style={styles.create}>Create Account</Text>

			<TextInput
				style={styles.input}
				onChangeText={onChangeName}
				value={name}
				placeholder='name'
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChangeEmail}
				value={email}
				placeholder='email'
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.input}
				onChangeText={onChangePass}
				value={pass}
				placeholder='password'
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("HPA")}>
				<Text style={styles.textBtn}>REGISTER</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate("Login")}>
				<Text style={styles.baseText}>Already have an account? Sign In</Text>
			</TouchableOpacity>
		</View>
	);
};
export default Register;
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
	create: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#426EB4",
		marginBottom: 25,
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
		width: 120,
		borderRadius: 20,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 20,
	},
	textBtn: {
		fontWeight: "bold",
		fontSize: 13,
		color: "#FFF",
		textAlign: "center",
	},
	baseText: {
		fontWeight: "bold",
		fontSize: 10,
		color: "#426EB4",
		marginTop: 10,
	},
});
