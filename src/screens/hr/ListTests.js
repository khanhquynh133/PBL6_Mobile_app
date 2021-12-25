/** @format */

import React, { Component } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
const DATA = [
	{
		id: "1",
		title: "Test Reactjs Fresher",
		logo: require("../../assets/images/Supreme.png"),
	},
	{
		id: "2",
		title: "Test NodeJS Intern",
	},
	{
		id: "3",
		title: "Test JAVA",
	},
	{
		id: "4",
		title: "Test NET Junior",
	},
	{
		id: "5",
		title: "Test PHP",
	},
];

const Item = ({ title, logo }) => {
	return (
		<View style={styles.item}>
			{/* <Image
				style={styles.logo}
				source={require("../../assets/images/Supreme.png")}
			/> */}
			<Text style={styles.name}>{title}</Text>
			<TouchableOpacity
				style={styles.detail}
				onPress={() => this.props.navigation.navigate("DetailPost")}>
				<Icon name='dots-horizontal' size={30} color='#b8b8aa' />
			</TouchableOpacity>
		</View>
	);
};

const renderItem = ({ item }) => <Item title={item.title} />;
class Company extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: DATA,
			error: null,
			searchValue: "",
		};
		this.arrayholder = DATA;
	}

	searchFunction = (text) => {
		const updatedData = this.arrayholder.filter((item) => {
			const item_data = `${item.title.toUpperCase()})`;
			const text_data = text.toUpperCase();
			return item_data.indexOf(text_data) > -1;
		});
		this.setState({ data: updatedData, searchValue: text });
	};

	render() {
		return (
			<View style={styles.container}>
				<SearchBar
					placeholder='Search Name of Company Here...'
					lightTheme
					round
					value={this.state.searchValue}
					onChangeText={(text) => this.searchFunction(text)}
					autoCorrect={false}
				/>
				<FlatList
					data={this.state.data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		);
	}
}

export default Company;

const styles = StyleSheet.create({
	container: {
		padding: 2,
	},
	item: {
		flex: 1,
		backgroundColor: "#205AA7",
		alignItems: "center", //giữa trang
		padding: 28,
		marginVertical: 12,
		marginHorizontal: 16,
		flexDirection: "row",
		borderRadius: 30,
	},
	name: {
		flex: 1,
		color: "#FFF",
		fontSize: 16,
	},
	logo: {
		width: 40,
		height: 40,
		marginRight: 10,
	},
	detail: {
		marginLeft: "auto",
	},
});

// /** @format */

// import React from "react";
// import {
// 	View,
// 	SafeAreaView,
// 	Text,
// 	StyleSheet,
// 	FlatList,
// 	Image,
// 	Dimensions,
// } from "react-native";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import COLORS from "../../consts/colors";
// import { GET_TESTS_URL } from "../../config";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import IsLoading from "../../components/Loading";
// const width = Dimensions.get("window").width / 2 - 30;

// const ListTests = ({ navigation }) => {
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [alltests, setAllTests] = useState({});

// 	useEffect(() => {
// 		//"eyJhbGciOiJSUzI1NiIsImtpZCI6IkE5REMzOTY0RDBGMzZFRjE3MTIxNTFGQUM3OTU0ODQ2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2Mzk5MTExOTMsImV4cCI6MTY3MTQ0NzE5MywiaXNzIjoiaHR0cDovLzIwLjg1LjIzNC4xMDk6MTExMiIsImF1ZCI6IkhyZW8iLCJjbGllbnRfaWQiOiJIcmVvX0FwcCIsInN1YiI6IjNhMDBkZTAxLWZlYzYtM2ZjZC1iMDdkLWY2NjlmYjU5MTFjOCIsImF1dGhfdGltZSI6MTYzOTkxMTE5MywiaWRwIjoibG9jYWwiLCJyb2xlIjoiYXBwbGljYW50IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbCI6ImRhdHZuQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJGYWxzZSIsIm5hbWUiOiJkYXR2biIsImlhdCI6MTYzOTkxMTE5Mywic2NvcGUiOlsiYWRkcmVzcyIsImVtYWlsIiwiSHJlbyIsIm9wZW5pZCIsInBob25lIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.VrZRWXZiD4yrspai62wrR7ZSFBTxzhjgKwbvOq-zHL12jxATdvEya2H_GRV3cE8HeVSQnD3-y3nzqLOsie4WDBU4UYIgbyBVcPShsAnRT6Yj_GZi9AYDjZ6KN4wywifwFSHMDonMBFsws6K7sawNqx9IqbVr7AzLARkMIzHJxTplYQuj5SBVPou5vkouA-T59w0gHVrBXTut5eevEVi6_YarkBHmWgRKQPhh-PAwjqQVdSN288qICcpD8RqF5SLK5t7zZ4VWixVcWQebR-VN1IWY0jTDIN9y88_C9Ks0X3m04NL0OUsxdMZLeJE4BtP9xEhxXjYhKz1g1PVoV_z7vA";
// 		const getTests = async () => {
// 			setIsLoading(true);
// 			const response = await axios.get(GET_TESTS_URL);
// 			//setAllTests(response.data.items);
// 			console.log(response.data.items);
// 			setIsLoading(false);
// 		};
// 		getTests();
// 	}, []);
// 	const Card = ({ test }) => {
// 		return (
// 			<TouchableOpacity activeOpacity={0.8}>
// 				{/* onPress={() =>
// 					navigation.navigate("DetailTest", {
// 						params: { test: test },
// 					})
// 				} */}
// 				<View style={style.card}>
// 					{/* <View
// 						style={{
// 							height: 80,
// 						}}>
// 						<Image
// 							source={{ uri: test.logoUrl }}
// 							style={{
// 								alignItems: "center",
// 								width: 100,
// 								height: 100,
// 							}}
// 						/>
// 					</View> */}

// 					{/* <Text
// 						style={{
// 							fontWeight: "bold",
// 							fontSize: 17,
// 							marginTop: 40,
// 							alignItems: "center",
// 						}}>
// 						{test.title}
// 					</Text> */}
// 					<Text
// 						style={{
// 							fontWeight: "bold",
// 							fontSize: 17,
// 							marginTop: 40,
// 							alignItems: "center",
// 						}}>
// 						{test.level}
// 					</Text>
// 					<Text
// 						style={{
// 							fontWeight: "bold",
// 							fontSize: 17,
// 							marginTop: 40,
// 							alignItems: "center",
// 						}}>
// 						{test.language}
// 					</Text>
// 					{/* <View
// 						style={{
// 							flexDirection: "row",
// 							justifyContent: "space-between",
// 							marginTop: 5,
// 						}}>
// 						<Text style={{ fontSize: 12 }}>{company.address}</Text>
// 					</View> */}
// 				</View>
// 			</TouchableOpacity>
// 		);
// 	};

// 	return isLoading ? (
// 		<IsLoading />
// 	) : (
// 		<SafeAreaView
// 			style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
// 			<View style={style.header}>
// 				<View>
// 					<Text
// 						style={{ fontSize: 38, color: COLORS.blue, fontWeight: "bold" }}>
// 						HREO
// 					</Text>
// 					<Text style={{ fontSize: 25, fontWeight: "bold" }}>All Tests</Text>
// 				</View>
// 				{/* <TouchableOpacity onPress={() => navigation.navigate("Company")}>
// 					<Icon name='arrow-back' size={28} />
// 				</TouchableOpacity> */}
// 			</View>

// 			{/* <View style={{ marginTop: 30, marginBottom: 20, flexDirection: "row" }}>
// 				<View style={style.searchContainer}>
// 					<Icon name='search' size={25} style={{ marginLeft: 20 }} />
// 					<TextInput placeholder='Search' style={style.input} />
// 				</View>
// 				<View style={style.sortBtn}>
// 					<Icon name='sort' size={30} color={COLORS.white} />
// 				</View>
// 			</View> */}

// 			{/* <CategoryList /> */}
// 			<FlatList
// 				columnWrapperStyle={{ justifyContent: "space-between" }}
// 				showsVerticalScrollIndicator={false}
// 				contentContainerStyle={{
// 					marginTop: 40,
// 					paddingBottom: 50,
// 				}}
// 				numColumns={2}
// 				data={alltests}
// 				renderItem={({ item }) => {
// 					return <Card company={item} />;
// 				}}
// 			/>
// 		</SafeAreaView>
// 	);
// };

// const style = StyleSheet.create({
// 	categoryContainer: {
// 		flexDirection: "row",
// 		marginTop: 30,
// 		marginBottom: 20,
// 		justifyContent: "space-between",
// 	},
// 	categoryText: { fontSize: 16, color: "grey" },
// 	categoryTextSelected: {
// 		color: COLORS.blue,
// 		paddingBottom: 5,
// 		borderBottomWidth: 2,
// 		borderColor: COLORS.blue,
// 	},
// 	card: {
// 		justifyContent: "center",
// 		height: 225,
// 		backgroundColor: COLORS.light,
// 		width,
// 		marginHorizontal: 2,
// 		borderRadius: 10,
// 		marginBottom: 20,
// 		padding: 15,
// 	},
// 	header: {
// 		marginTop: 30,
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 	},
// 	searchContainer: {
// 		height: 50,
// 		backgroundColor: COLORS.light,
// 		borderRadius: 10,
// 		flex: 1,
// 		flexDirection: "row",
// 		alignItems: "center",
// 	},
// 	input: {
// 		fontSize: 18,
// 		fontWeight: "bold",
// 		flex: 1,
// 		color: COLORS.dark,
// 	},
// 	sortBtn: {
// 		marginLeft: 10,
// 		height: 50,
// 		width: 50,
// 		borderRadius: 10,
// 		backgroundColor: COLORS.blue,
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},
// });
// export default ListTests;
