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
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import companies from "../../consts/companies";
const width = Dimensions.get("window").width / 2 - 30;

const Company = ({ navigation }) => {
  const Card = ({ company }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("DetailCompany", {
            params: { company: company },
          })
        }
      >
        <View style={style.card}>
          <View
            style={{
              height: 80,
            }}
          >
            <Image
              source={company.img}
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
            }}
          >
            {company.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 12 }}>{company.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <View style={style.header}>
        <View>
          <Text
            style={{ fontSize: 38, color: COLORS.blue, fontWeight: "bold" }}
          >
            HREO
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            All companies
          </Text>
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Company")}>
					<Icon name='arrow-back' size={28} />
				</TouchableOpacity> */}
      </View>

      <View style={{ marginTop: 30, marginBottom: 20, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
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
        data={companies}
        renderItem={({ item }) => {
          return <Card company={item} />;
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
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
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
export default Company;

// import React, { Component } from "react";
// import { Image, StyleSheet, Text, View, FlatList } from "react-native";
// import { ListItem, SearchBar } from "react-native-elements";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import { TouchableOpacity } from "react-native-gesture-handler";

// const DATA = [
// 	{
// 		id: "1",
// 		title: "Data Asia House",
// 		route: "../../assets/DHA.png",
// 	},
// 	{
// 		id: "2",
// 		title: "Supreme Tech",
// 	},
// 	{
// 		id: "3",
// 		title: "Green Global",
// 	},
// 	{
// 		id: "4",
// 		title: "Enlab",
// 	},
// 	{
// 		id: "5",
// 		title: "Enclave",
// 	},
// 	{
// 		id: "6",
// 		title: "Bap",
// 	},
// ];

// const Item = ({ title }) => {
// 	return (
// 		<View style={styles.item}>
// 			<Image style={styles.logo} source={require("../../assets/DHA.png")} />
// 			<Text style={styles.name}>{title}</Text>
// 			<TouchableOpacity style={styles.detail}>
// 				<Icon name='dots-horizontal' size={30} color='#b8b8aa' />
// 			</TouchableOpacity>
// 		</View>
// 	);
// };

// const renderItem = ({ item }) => <Item title={item.title} />;
// class Company extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			loading: false,
// 			data: DATA,
// 			error: null,
// 			searchValue: "",
// 		};
// 		this.arrayholder = DATA;
// 	}

// 	searchFunction = (text) => {
// 		const updatedData = this.arrayholder.filter((item) => {
// 			const item_data = `${item.title.toUpperCase()})`;
// 			const text_data = text.toUpperCase();
// 			return item_data.indexOf(text_data) > -1;
// 		});
// 		this.setState({ data: updatedData, searchValue: text });
// 	};

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<SearchBar
// 					placeholder='Search Name of Company Here...'
// 					lightTheme
// 					round
// 					value={this.state.searchValue}
// 					onChangeText={(text) => this.searchFunction(text)}
// 					autoCorrect={false}
// 				/>
// 				<FlatList
// 					data={this.state.data}
// 					renderItem={renderItem}
// 					keyExtractor={(item) => item.id}
// 				/>
// 			</View>
// 		);
// 	}
// }

// export default Company;

// const styles = StyleSheet.create({
// 	container: {
// 		padding: 2,
// 	},
// 	item: {
// 		flex: 1,
// 		backgroundColor: "#205AA7",
// 		alignItems: "center", //giữa trang
// 		padding: 28,
// 		marginVertical: 12,
// 		marginHorizontal: 16,
// 		flexDirection: "row",
// 		borderRadius: 30,
// 	},
// 	name: {
// 		flex: 1,
// 		color: "#FFF",
// 		fontSize: 20,
// 	},
// 	logo: {
// 		width: 40,
// 		height: 40,
// 		marginRight: 10,
// 	},
// 	detail: {
// 		marginLeft: "auto",
// 	},
// });
