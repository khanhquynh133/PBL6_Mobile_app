/** @format */

import * as React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const width = Dimensions.get("window").width / 2 - 30;
const CardJobFav = ({ navigation, job }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() =>
				navigation.navigate("CardJobDetail", {
					job: job,
				})
			}>
			<View
				style={{
					justifyContent: "center",
					height: 225,
					backgroundColor: COLORS.light,
					width,
					marginHorizontal: 2,
					borderRadius: 10,
					marginBottom: 20,
					padding: 15,
				}}>
				<View
					style={{
						height: 80,
					}}>
					<Image
						source={job.img}
						style={{
							alignItems: "center",
							width: 100,
							height: 100,
						}}
						r
					/>
				</View>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 17,
						marginTop: 40,
						alignItems: "center",
					}}>
					{job.name}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 5,
					}}>
					<Text
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 5,
						}}>
						{job.position}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default CardJobFav;
