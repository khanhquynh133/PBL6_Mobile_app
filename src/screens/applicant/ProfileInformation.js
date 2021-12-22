/** @format */

import React, { Component } from "react";
import {
	View,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	Image,
	Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import IsLoading from "../../components/Loading";
import { GET_INFO_CURRENT_USER } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileInformation = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const [userAbp, setUserAbp] = useState({});

	useEffect(() => {
		//"eyJhbGciOiJSUzI1NiIsImtpZCI6IkE5REMzOTY0RDBGMzZFRjE3MTIxNTFGQUM3OTU0ODQ2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2Mzk5MTExOTMsImV4cCI6MTY3MTQ0NzE5MywiaXNzIjoiaHR0cDovLzIwLjg1LjIzNC4xMDk6MTExMiIsImF1ZCI6IkhyZW8iLCJjbGllbnRfaWQiOiJIcmVvX0FwcCIsInN1YiI6IjNhMDBkZTAxLWZlYzYtM2ZjZC1iMDdkLWY2NjlmYjU5MTFjOCIsImF1dGhfdGltZSI6MTYzOTkxMTE5MywiaWRwIjoibG9jYWwiLCJyb2xlIjoiYXBwbGljYW50IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbCI6ImRhdHZuQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJGYWxzZSIsIm5hbWUiOiJkYXR2biIsImlhdCI6MTYzOTkxMTE5Mywic2NvcGUiOlsiYWRkcmVzcyIsImVtYWlsIiwiSHJlbyIsIm9wZW5pZCIsInBob25lIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.VrZRWXZiD4yrspai62wrR7ZSFBTxzhjgKwbvOq-zHL12jxATdvEya2H_GRV3cE8HeVSQnD3-y3nzqLOsie4WDBU4UYIgbyBVcPShsAnRT6Yj_GZi9AYDjZ6KN4wywifwFSHMDonMBFsws6K7sawNqx9IqbVr7AzLARkMIzHJxTplYQuj5SBVPou5vkouA-T59w0gHVrBXTut5eevEVi6_YarkBHmWgRKQPhh-PAwjqQVdSN288qICcpD8RqF5SLK5t7zZ4VWixVcWQebR-VN1IWY0jTDIN9y88_C9Ks0X3m04NL0OUsxdMZLeJE4BtP9xEhxXjYhKz1g1PVoV_z7vA";
		const getUserInfo = async () => {
			setIsLoading(true);
			const token = await AsyncStorage.getItem("_token");
			const response = await axios.get(GET_INFO_CURRENT_USER, {
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			setUserInfo(response.data);
			setUserAbp(response.data.userAbp);
			console.log(response.data);
			setIsLoading(false);
		};
		getUserInfo();
	}, []);

	return isLoading ? (
		<IsLoading />
	) : (
		<View>
			<ScrollView>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
						<Icon1 name='arrow-back' size={28} color='#FFF' />
					</TouchableOpacity>
				</View>
				<View style={{ alignItems: "center" }}>
					<Image
						source={require("../../assets/images/HR/chinh.jpg")}
						style={{
							width: 140,
							height: 140,
							borderRadius: 100,
							marginTop: -70,
						}}
					/>
					<Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
						{userAbp.name}
					</Text>
					<Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
						{userInfo.level}
					</Text>
				</View>
				<TouchableOpacity>
					<View style={styles.profileComponent}>
						<Icon
							name='laptop-code'
							color='#adadad'
							size={20}
							style={{ marginRight: 12 }}
						/>
						<Text>
							{userInfo.level} {userInfo.language}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.profileComponent}>
						<Icon
							name='map-marker-alt'
							color='#adadad'
							size={20}
							style={{ marginRight: 12 }}
						/>
						<Text>{userInfo.workAddress}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.profileComponent}>
						<Icon
							name='link'
							color='#adadad'
							size={20}
							style={{ marginRight: 12 }}
						/>
						<Text>Github Link : {userInfo.githubLink}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.profileComponent}>
						<Icon
							name='code'
							color='#adadad'
							size={20}
							style={{ marginRight: 12 }}
						/>
						<Text> Language : {userInfo.language}</Text>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default ProfileInformation;
const styles = StyleSheet.create({
	header: {
		padding: 10,
		width: "100%",
		backgroundColor: COLORS.blue,
		height: 150,
	},
	profileComponent: {
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#fff",
		width: "90%",
		padding: 20,
		paddingBottom: 20,
		borderRadius: 19,
		shadowOpacity: 50,
		elevation: 15,
		marginTop: 40,
	},
	profileLogout: {
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: COLORS.blue,
		width: "90%",
		padding: 20,
		paddingBottom: 22,
		borderRadius: 19,
		shadowOpacity: 80,
		elevation: 15,
		marginTop: 40,
	},
});
