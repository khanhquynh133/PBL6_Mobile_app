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
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import { SIGNUP_URL } from "../../config";
import Icon from "react-native-vector-icons/FontAwesome5";
import RadioGroup from "react-native-radio-buttons-group";
import axios from "axios";
const Register = ({ navigation }) => {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  const [role, setRole] = React.useState("");
  const [pwdError, setPwdError] = useState(false);
  const [duplicateErr, setDuplicateErr] = React.useState(false);
  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "HR",
      value: "hr",
    },
    {
      id: "2",
      label: "Applicant",
      value: "applicant",
    },
  ];

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const [isShowPassword, setIsShowPassword] = React.useState(false);
  function onPressRadioButton(radioButtonsArray) {
    setRole(
      radioButtonsArray.find((radioButton) => radioButton.selected === true)
        .value
    );
    setRadioButtons(radioButtonsArray);
  }
  const validatePassword = () => {
    setDuplicateErr(false);
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!passwordRegex.test(pass)) {
      setPwdError(true);
    }
  };

  const handleRegister = async () => {
    const body = {
      username: name,
      password: pass,
      email: email,
      roles: [role],
    };
    const options = {
      method: "POST",
      data: body,
      responseType: "application/json",
    };

    try {
      const response = await axios(SIGNUP_URL, options);
      console.log(response);
      navigation.navigate("Login");
    } catch (err) {
      setDuplicateErr(true);
    }
  };

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
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          secureTextEntry={isShowPassword ? false : true}
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          onBlur={() => validatePassword()}
          onFocus={() => {
            setPwdError(false);
          }}
          placeholder="password"
        />
        <TouchableOpacity>
          <Icon
            name={isShowPassword ? "eye" : "eye-slash"}
            onPress={() => {
              setIsShowPassword(!isShowPassword);
            }}
            size={20}
          />
        </TouchableOpacity>
      </View>

      {pwdError && (
        <View style={styles.containerErrorMessage}>
          <Text style={styles.errorMessage}>
            Passwords must have at least one special character or least one
            digit('0'-'9') or least one upperCase character ('A'-'Z').
          </Text>
        </View>
      )}
      {duplicateErr && (
        <View style={styles.containerErrorMessage}>
          <Text style={styles.errorMessage}>
            Username or email you already in existed
          </Text>
        </View>
      )}
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
      <TouchableOpacity
        disabled={pwdError}
        style={styles.button}
        onPress={() => handleRegister()}
      >
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
    alignItems: "center", //giữa trang
    justifyContent: "center",
  },
  containerErrorMessage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  errorMessage: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#FF0000",
    marginTop: 10,
    textAlign: "center",
  },
  radioButton: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  dropdownlist: {
    flex: 1,
    alignItems: "center",
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
