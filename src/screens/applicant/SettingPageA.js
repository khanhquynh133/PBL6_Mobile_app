/** @format */

import React from "react";
import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	FlatList,
	Image,
	Dimensions,
	TextInputBase,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

const SettingPageA = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
				<View
					style={{
						alignSelf: "center",
						flexDirection: "row",
						justifyContent: "center",
						backgroundColor: COLORS.blue,
						width: "90%",
						padding: 20,
						paddingBottom: 20,
						borderRadius: 19,
						shadowOpacity: 80,
						elevation: 15,
						marginTop: 20,
					}}>
					<Icon1
						name='person'
						color='#adadad'
						size={20}
						style={{ marginRight: 12 }}
					/>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "bold",
							marginLeft: 10,
							color: COLORS.white,
						}}>
						PROFILE
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
				<View
					style={{
						alignSelf: "center",
						flexDirection: "row",
						justifyContent: "center",
						backgroundColor: COLORS.blue,
						width: "90%",
						padding: 20,
						paddingBottom: 20,
						borderRadius: 19,
						shadowOpacity: 80,
						elevation: 15,
						marginTop: 20,
					}}>
					<Icon
						name='sign-out-alt'
						color='#adadad'
						size={20}
						style={{ marginRight: 12 }}
					/>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "bold",
							marginLeft: 10,
							color: COLORS.white,
						}}>
						LOGOUT
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
export default SettingPageA;
