/** @format */

import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon2 from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Cards extends Component {
	render() {
		return (
			<View
				style={{
					height: 200,
					width: 130,
					borderRadius: 30,
					padding: 15,
					marginLeft: 20,
					borderRadius: 5,
				}}>
				<View style={{ flexDirection: "row", backgroundColor: "426EB4" }}>
					<Icon name={this.props.icon} size={30} color={"#426EB4"} />
					<TouchableOpacity onPress={this.props.onPress}>
						<Icon2
							style={{ marginLeft: 50 }}
							name='dots-vertical'
							size={30}
							color='#b8b8aa'
						/>
					</TouchableOpacity>
				</View>
				<Text
					style={{
						marginTop: 30,
						color: "#2b3240",
						fontWeight: "bold",
						fontSize: 12,
					}}>
					{this.props.title}
				</Text>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 22,
						color: "#000",
					}}>
					{this.props.number}
				</Text>
			</View>
		);
	}
}
