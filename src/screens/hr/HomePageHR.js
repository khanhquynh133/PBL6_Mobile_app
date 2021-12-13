/** @format */

import * as React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeHR from "../hr/HomeHR";
import TotalPosts from "./TotalPosts";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
function HomePage({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Home'>
			<Stack.Screen name='Home' component={HomeHR} />
			<Stack.Screen name='TotalPosts' component={TotalPosts} />
		</Stack.Navigator>
	);
}

function Post() {
	return (
		// <Stack.Navigator
		// 	screenOptions={{
		// 		headerShown: false,
		// 	}}
		// 	initialRouteName='Posts'>
		// 	<Stack.Screen name='Posts' component={ListPosts} />
		// </Stack.Navigator>
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Settings!</Text>
		</View>
	);
}

function Setting({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<TouchableOpacity
				style={{
					alignItems: "center",
					backgroundColor: "#426EB4",
					padding: 10,
					height: 35,
					width: 120,
					borderRadius: 20,
					marginLeft: 50,
					marginRight: 50,
					marginTop: 20,
				}}
				onPress={() => navigation.navigate("Welcome")}>
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
				name='Post'
				component={Post}
				options={{
					tabBarLabel: "Post",
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

const HomePageHR = () => {
	return <MyTabs />;
};
export default HomePageHR;
