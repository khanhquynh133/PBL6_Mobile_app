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
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import applicants from "../../consts/applicants";

const width = Dimensions.get("window").width / 2 - 30;
const Applicant = ({ navigation }) => {
	const Card = ({ applicant }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() =>
					navigation.navigate("DetailApplicant", {
						params: { applicant: applicant },
					})
				}>
				<View style={style.card}>
					<View
						style={{
							height: 80,
						}}>
						<Image
							source={applicant.img}
							style={{
								alignItems: "center",
								width: 100,
								height: 100,
							}}
						/>
					</View>

					<Text
						style={{
							fontWeight: "bold",
							fontSize: 17,
							marginTop: 40,
							alignItems: "center",
							justifyContent: "center",
						}}>
						{applicant.name}
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 5,
						}}>
						<Text style={{ fontSize: 12 }}>{applicant.address}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView
			style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
			<View style={style.header}>
				<View>
					<Text
						style={{ fontSize: 38, color: COLORS.blue, fontWeight: "bold" }}>
						HREO
					</Text>
					<Text style={{ fontSize: 25, fontWeight: "bold" }}>
						All Applicants
					</Text>
				</View>
			</View>

			<View style={{ marginTop: 30, marginBottom: 20, flexDirection: "row" }}>
				<View style={style.searchContainer}>
					<Icon name='search' size={25} style={{ marginLeft: 20 }} />
					<TextInput placeholder='Search' style={style.input} />
				</View>
				<View style={style.sortBtn}>
					<Icon name='sort' size={30} color={COLORS.white} />
				</View>
			</View>

			{/* <CategoryList /> */}
			<FlatList
				columnWrapperStyle={{ justifyContent: "space-between" }}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: 10,
					paddingBottom: 50,
				}}
				numColumns={2}
				data={applicants}
				renderItem={({ item }) => {
					return <Card applicant={item} />;
				}}
			/>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	categoryContainer: {
		flexDirection: "row",
		marginTop: 30,
		marginBottom: 20,
		justifyContent: "space-between",
	},
	categoryText: { fontSize: 16, color: "grey" },
	categoryTextSelected: {
		color: COLORS.blue,
		paddingBottom: 5,
		borderBottomWidth: 2,
		borderColor: COLORS.blue,
	},
	card: {
		justifyContent: "center",
		height: 225,
		backgroundColor: COLORS.light,
		marginHorizontal: 2,
		borderRadius: 10,
		marginBottom: 20,
		padding: 15,
		width,
	},
	header: {
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	searchContainer: {
		height: 50,
		backgroundColor: COLORS.light,
		borderRadius: 10,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	input: {
		fontSize: 18,
		fontWeight: "bold",
		flex: 1,
		color: COLORS.dark,
	},
	sortBtn: {
		marginLeft: 10,
		height: 50,
		width: 50,
		borderRadius: 10,
		backgroundColor: COLORS.blue,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default Applicant;
