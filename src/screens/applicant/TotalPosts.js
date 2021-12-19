/** @format */

import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import COLORS from "../../consts/colors";
import ChartCompany from "../../components/HR/ChartPosts";

const TotalPosts = ({ navigation }) => {
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
					TOTAL POSTS
				</Text>
			</View>
			<ChartCompany />
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
export default TotalPosts;
