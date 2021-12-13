/** @format */

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeApplicant from "../applicant/HomeApplicant";
import TotalJobPosting from "./TotalJobPosting";
import SettingPageA from "./SettingPageA";
import ProfileInformation from "./ProfileInformation";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
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

function tabNoti() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Noti!</Text>
		</View>
	);
}

function tabSetting() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Setting'>
			<Stack.Screen name='Setting' component={SettingPageA} />
			<Stack.Screen name='Profile' component={ProfileInformation} />
		</Stack.Navigator>
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
				name='Notification'
				component={tabNoti}
				options={{
					tabBarLabel: "Notification",
					tabBarIcon: ({ color, size }) => (
						<Icon name='md-notifications' color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name='Setting'
				component={tabSetting}
				options={{
					tabBarLabel: "Setting",
					tabBarIcon: ({ color, size }) => (
						<Icon name='settings' color={color} size={size} />
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
