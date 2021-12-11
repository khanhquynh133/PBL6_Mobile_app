/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import COLORS from "../../consts/colors";
import ChartHR from "../../components/ChartHR";

const TotalHR = ({ navigation }) => {
	return (
		<View style={{ backgroundColor: "#FFF", flex: 1 }}>
			<View
				style={{
					alignSelf: "center",
					flexDirection: "row",
					paddingHorizontal: 30,
					marginTop: 40,
					alignItems: "center",
				}}>
				<Text style={{ fontWeight: "bold", fontSize: 16, color: COLORS.blue }}>
					TOTAL HR
				</Text>
			</View>
			<ChartHR />
			<View
				style={{
					backgroundColor: COLORS.blue,
					height: 160,
					marginTop: 50,
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
				}}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						alignSelf: "center",
						marginTop: 20,
					}}>
					<Text
						style={{
							fontWeight: "bold",
							color: "white",
							fontSize: 16,
						}}>
						In 2021
					</Text>
				</View>

				<View
					style={{
						borderRadius: 15,
						borderColor: "white",
						borderWidth: 1,
						marginHorizontal: 30,
						paddingHorizontal: 20,
						paddingVertical: 15,
						alignItems: "center",
						marginTop: 50,
						marginBottom: 5,
					}}>
					<TouchableOpacity onPress={() => navigation.navigate("Home")}>
						<Text
							style={{
								fontWeight: "bold",
								color: "yellow",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							BACK
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	page: {
		backgroundColor: "#FFF",
		flex: 1,
	},
	headContainer: {
		marginHorizontal: 20,
		flexDirection: "row",
		marginTop: 40,
	},
	humContainer: {
		width: "50%",
	},
	hum: {
		marginTop: -20,
		marginLeft: 5,
	},
	profileContainer: {
		width: "50%",
		alignItems: "flex-end",
	},
	profile: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},

	textLinear: {
		color: "#FFF",
		fontSize: 12,
		fontWeight: "bold",
	},
	textLogarthimic: {
		color: "#b8b8aa",
		fontWeight: "bold",
		fontSize: 12,
		marginLeft: 15,
	},
	locationContainer: {
		alignSelf: "center",
		flexDirection: "row",
		paddingHorizontal: 30,
		marginTop: 40,
		alignItems: "center",
	},
	textTotal: {
		fontWeight: "bold",
		fontSize: 16,
		color: COLORS.blue,
	},

	bottomCard: {
		backgroundColor: COLORS.blue,
		height: 160,
		marginTop: 50,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	bottomCol: {
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		marginTop: 20,
	},
	textYear: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		color: "white",
		fontSize: 16,
	},

	button: {
		borderRadius: 15,
		borderColor: "white",
		borderWidth: 1,
		marginHorizontal: 30,
		paddingHorizontal: 20,
		paddingVertical: 15,
		alignItems: "center",
		marginTop: 50,
		marginBottom: 5,
	},
	btnText: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		color: "yellow",
		fontSize: 16,
		fontWeight: "bold",
	},
});
export default TotalHR;
