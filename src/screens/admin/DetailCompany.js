/** @format */

import React from "react";
import {
	ScrollView,
	View,
	SafeAreaView,
	Image,
	Text,
	StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

const DetailCompany = ({ navigation, route }) => {
	const { company } = route.params.params;
	//console.log(company.name);
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
			}}>
			<View style={style.header}>
				<Icon
					name='arrow-back'
					size={28}
					onPress={() => navigation.navigate("Companyy")}
				/>
			</View>
			<View style={style.imageContainer}>
				<Image
					source={company.img}
					style={{
						resizeMode: "contain",
						flex: 1,
					}}
				/>
			</View>

			<View style={style.detailsContainer}>
				<View
					style={{
						marginLeft: 20,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Text style={{ fontSize: 22, fontWeight: "bold" }}>
						{company.name}
					</Text>
					<View style={style.rate}>
						{/* <Icon name='start' size={16} /> */}
						<Text
							style={{
								marginLeft: 15,
								color: COLORS.white,
								fontWeight: "bold",
								fontSize: 16,
							}}>
							{company.rate}/5
						</Text>
					</View>
				</View>
				<View style={{ paddingHorizontal: 20, marginTop: 10 }}>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>About us</Text>
					<Text
						style={{
							color: "grey",
							fontSize: 16,
							lineHeight: 22,
							marginTop: 10,
						}}>
						{company.about}
					</Text>
					<Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
						Contact
					</Text>
					<Text
						style={{
							color: "grey",
							fontSize: 16,
							lineHeight: 22,
							marginTop: 10,
						}}>
						{company.contact}
					</Text>
					<View
						style={{
							marginTop: 20,
							flexDirection: "row",
							justifyContent: "flex-end",
						}}>
						{/* <View style={style.editBtn}>
							<Text
								style={{
									color: COLORS.white,
									fontSize: 18,
									fontWeight: "bold",
								}}>
								Edit
							</Text>
						</View> */}
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	header: {
		paddingHorizontal: 20,
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	imageContainer: {
		flex: 0.5,
		marginTop: 20,
		marginBottom: 7,
	},
	detailsContainer: {
		flex: 0.55,
		backgroundColor: COLORS.light,
		marginHorizontal: 7,
		marginBottom: 7,
		borderRadius: 20,
		marginTop: 30,
		paddingTop: 20,
	},
	borderBtn: {
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		width: 60,
		height: 40,
	},
	borderBtnText: { fontWeight: "bold", fontSize: 28 },
	editBtn: {
		width: 80,
		height: 30,
		backgroundColor: COLORS.blue,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	rate: {
		backgroundColor: COLORS.blue,
		width: 80,
		height: 40,
		justifyContent: "center",
		borderTopLeftRadius: 25,
		borderBottomLeftRadius: 25,
	},
});

export default DetailCompany;
