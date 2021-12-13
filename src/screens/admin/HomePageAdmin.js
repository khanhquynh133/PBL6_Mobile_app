/** @format */

import * as React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TotalCompany from "./TotalCompany";
import TotalApplicant from "./TotalApplicant";
import TotalHR from "./TotalHR";
import Home from "./Home";
import Company from "./Company";
import DetailCompany from "./DetailCompany";
import HR from "./HR";
import Login from "../general/Login";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
function HomePage({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Home'>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='TotalCompany' component={TotalCompany} />
			<Stack.Screen name='TotalApplicant' component={TotalApplicant} />
			<Stack.Screen name='TotalHR' component={TotalHR} />
		</Stack.Navigator>
	);
}

function tabCompany() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Companyy'>
			<Stack.Screen name='Companyy' component={Company} />
			<Stack.Screen name='DetailCompany' component={DetailCompany} />
		</Stack.Navigator>
	);
}

function tabHR() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='HRR'>
			<Stack.Screen name='HRR' component={HR} />
			<Stack.Screen name='DetailCompany' component={DetailCompany} />
		</Stack.Navigator>
	);
}
function Applicant() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Applicant!</Text>
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
				name='Company'
				component={tabCompany}
				options={{
					tabBarLabel: "Company",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='office-building'
							color={color}
							size={size}
						/>
					),
				}}
			/>

			<Tab.Screen
				name='HR'
				component={tabHR}
				options={{
					tabBarLabel: "HR",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='account' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Applicant'
				component={Applicant}
				options={{
					tabBarLabel: "Applicant",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='nature-people'
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

const HomePageAdmin = () => {
	return <MyTabs />;
};
export default HomePageAdmin;
