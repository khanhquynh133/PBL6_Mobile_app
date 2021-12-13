/** @format */

import React, { Component } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
const DATA = [
	{
		id: "1",
		title: "Intership Winter 2021",
	},
	{
		id: "2",
		title: "Supreme Tech",
	},
	{
		id: "3",
		title: "Green Global",
	},
	{
		id: "4",
		title: "Enlab",
	},
	{
		id: "5",
		title: "Enclave",
	},
	{
		id: "6",
		title: "Bap",
	},
];

const Item = ({ title }) => {
	return (
		<View style={styles.item}>
			<Image
				style={styles.logo}
				source={require("../../assets/images/DHA.png")}
			/>
			<Text style={styles.name}>{title}</Text>
			<TouchableOpacity style={styles.detail}>
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
		fontSize: 20,
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
