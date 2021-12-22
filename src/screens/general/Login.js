/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import HomePageApplicant from "../applicant/HomeApplicant";
import rest from "../../api/rest";
import { USER_INFORMATION_ENTRY_POINT, GET } from "../../utils/apiRequest";
import Icon from "react-native-vector-icons/FontAwesome5";
import jwt_decode from "jwt-decode";
import { GET_TOKEN_URL } from "../../config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }) => {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isWrongPassword, setWrongPassword] = useState(false);
  const handleLogin = async () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: "Basic SHJlb19BcHA6MXEydzNFKg==",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
      data: new URLSearchParams({
        username: dataLogin.username,
        password: dataLogin.password,
        grant_type: "password",
      }),
    };
    try {
      const response = await axios(GET_TOKEN_URL, options);
      const access_token = response.data.access_token;
      await AsyncStorage.setItem("_token", access_token);
      const { role } = jwt_decode(access_token);
      if (role === "hr") {
        // navigate  admin page
        navigation.navigate("HPAdmin");
      } else {
        // navigate page applicant
        navigation.navigate("HPApplicant");
      }
    } catch (error) {
      setWrongPassword(!isWrongPassword);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.login}>LOGIN</Text>
      <TextInput
        name="username"
        style={styles.input}
        // onChangeText={handleChange}
        onChangeText={(text) =>
          setDataLogin({
            ...dataLogin,
            username: text,
          })
        }
        value={dataLogin.username}
        placeholder="Email or Username"
      />
      <TextInput
        name="password"
        secureTextEntry={isShowPassword ? false : true}
        style={styles.input}
        // onChangeText={handleChange}
        onChangeText={(text) =>
          setDataLogin({
            ...dataLogin,
            password: text,
          })
        }
        value={dataLogin.password}
        placeholder="password"
      />
      {/* can you css at here so that icon can horizontal with the Text Password */}
      <TouchableOpacity>
        <Icon
          name={isShowPassword ? "eye" : "eye-slash"}
          onPress={() => {
            setIsShowPassword(!isShowPassword);
          }}
          size={20}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button}>
				<Button
					onPress={handleChange}
					onPress={() => navigation.navigate("HPAdmin")}
					style={styles.textBtn}
					title='LOGIN'></Button>
			</TouchableOpacity> */}

      {isWrongPassword && (
        <Text style={styles.warningText}>Wrong Username or Password</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate("HPAdmin")}
        onPress={() => handleLogin()}
      >
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
  warningText: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#FF0000",
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
