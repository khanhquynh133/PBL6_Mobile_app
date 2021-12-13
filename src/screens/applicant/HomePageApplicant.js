/** @format */

import * as React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeApplicant from "../applicant/HomeApplicant";
import TotalJobPosting from "./TotalJobPosting";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
const Stack = createStackNavigator();
function HomePage({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Home'>
			<Stack.Screen name='Home' component={HomeApplicant} />
		</Stack.Navigator>
	);
}

function Post() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='JobPosts'>
			<Stack.Screen name='JobPosts' component={TotalJobPosting} />
		</Stack.Navigator>
		// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		// 	<Text>Settings!</Text>
		// </View>
	);
}

function Fav() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='JobPosts'>
			<Stack.Screen name='JobPosts' component={TotalJobPosting} />
		</Stack.Navigator>
	);
}

function Setting({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<TouchableOpacity
				icon='home'
				style={{
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#426EB4",
					padding: 10,
					height: 35,
					width: 140,
					borderRadius: 20,
					marginLeft: 50,
					marginRight: 50,
					marginTop: 20,
					flexDirection: "row",
				}}
				onPress={() => navigation.navigate("Welcome")}>
				<Icon
					name='person'
					size={16}
					style={{ alignItems: "center", marginRight: 12, color: "#FFF" }}
				/>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 13,
						color: "#FFF",
						textAlign: "center",
					}}>
					EDIT INFOR
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#426EB4",
					padding: 10,
					height: 35,
					width: 140,
					borderRadius: 20,
					marginLeft: 50,
					marginRight: 50,
					marginTop: 20,
					flexDirection: "row",
				}}
				onPress={() => navigation.navigate("Welcome")}>
				<Icon
					name='logout'
					size={16}
					style={{ alignItems: "center", marginRight: 12, color: "#FFF" }}
				/>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 13,
						color: "#FFF",
						textAlign: "center",
					}}>
					LOGOUT
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='HomePage'
			screenOptions={{
				tabBarActiveTintColor: "#e91e63",
				tabBarVisible: false,
			}}>
			<Tab.Screen
				name='HomePage'
				component={HomePage}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='home' color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name='New Feed'
				component={Post}
				options={{
					tabBarLabel: "New Feed",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='newspaper-variant-outline'
							color={color}
							size={size}
						/>
					),
				}}
			/>

			<Tab.Screen
				name='Favorite Post'
				component={Fav}
				options={{
					tabBarLabel: "Favorite Post",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='heart' color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name='Setting'
				component={Setting}
				options={{
					tabBarLabel: "Setting",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='settings-helper'
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const HomePageApplicant = () => {
	return <MyTabs />;
};
export default HomePageApplicant;
