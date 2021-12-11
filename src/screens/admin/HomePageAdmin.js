/** @format */

import * as React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TotalCompany from "./TotalCompany";
import TotalApplicant from "./TotalApplicant";
import TotalHR from "./TotalHR";
import Home from "./Home";
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
		// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		// 	<Text>Feed!</Text>
		// </View>
		// <View style={{ flex: 1, backgroundColor: "#E0FFFF" }}>
		// 	<Image
		// 		style={{ width: 80, height: 80, alignSelf: "center", marginTop: 70 }}
		// 		source={require("../../assets/images/logo.png")}
		// 	/>
		// 	<Text
		// 		style={{
		// 			color: "#2b3240",
		// 			fontSize: 30,
		// 			alignSelf: "center",
		// 			marginTop: 10,
		// 			fontWeight: "bold",
		// 		}}>
		// 		HREO DASH
		// 	</Text>
		// 	<ScrollView
		// 		style={{ marginTop: 50 }}
		// 		showsHorizontalScrollIndicator={false}
		// 		horizontal>
		// 		<Cards
		// 			onPress={() => navigation.navigate("TotalCompany")}
		// 			icon='home'
		// 			title='TOTAL COMPANY'
		// 			number='1101'
		// 		/>
		// 		<Cards
		// 			onPress={() => navigation.navigate("TotalApplicant")}
		// 			icon='person'
		// 			title='TOTAL APPLICANTS'
		// 			number='1101'
		// 		/>
		// 		<Cards
		// 			onPress={() => navigation.navigate("TotalHR")}
		// 			icon='people'
		// 			title='TOTAL                HR'
		// 			number='1111'
		// 		/>
		// 	</ScrollView>
		// </View>
	);
}

function Company() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Company!</Text>
		</View>
	);
}

function HR() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>HR!</Text>
		</View>
	);
}
function Applicant() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Applicant!</Text>
		</View>
	);
}

function Setting() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Setting!</Text>
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
				component={Company}
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
				component={HR}
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
