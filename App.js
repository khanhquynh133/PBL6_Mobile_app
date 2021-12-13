/** @format */

import React from "react";

import Welcome from "./src/screens/general/Welcome";
import Login from "./src/screens/general/Login";
import Register from "./src/screens/general/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageAdmin from "./src/screens/admin/HomePageAdmin";
import HomePageHR from "./src/screens/hr/HomePageHR";
import HomePageApplicant from "./src/screens/applicant/HomePageApplicant";
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName='HPA'>
				<Stack.Screen name='Welcome' component={Welcome} />
				<Stack.Screen name='HPA' component={HomePageAdmin} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// import * as React from "react";
// import { Text, View, Image } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Cards from "./src/components/Cards";
// function HomePage() {
// 	return (
// 		// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// 		// 	<Text>Feed!</Text>
// 		// </View>
// 		<View style={{ flex: 1, backgroundColor: "#E0FFFF" }}>
// 			<Image
// 				style={{ width: 80, height: 80, alignSelf: "center", marginTop: 70 }}
// 				source={require("./src/assets/images/logo.png")}
// 			/>
// 			<Text
// 				style={{
// 					color: "#2b3240",
// 					fontSize: 30,
// 					alignSelf: "center",
// 					marginTop: 10,
// 					fontWeight: "bold",
// 				}}>
// 				HREO DASH
// 			</Text>
// 			<ScrollView
// 				style={{ marginTop: 50 }}
// 				showsHorizontalScrollIndicator={false}
// 				horizontal>
// 				<Cards
// 					onPress={() => navigation.navigate("TotalCompany")}
// 					icon='home'
// 					title='TOTAL COMPANY'
// 					number='1101'
// 				/>
// 				<Cards
// 					onPress={() => navigation.navigate("TotalApplicant")}
// 					icon='person'
// 					title='TOTAL APPLICANTS'
// 					number='1101'
// 				/>
// 				<Cards
// 					onPress={() => navigation.navigate("TotalHR")}
// 					icon='people'
// 					title='TOTAL                HR'
// 					number='1111'
// 				/>
// 			</ScrollView>
// 		</View>
// 	);
// }

// function Company() {
// 	return (
// 		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// 			<Text>Company!</Text>
// 		</View>
// 	);
// }

// function HR() {
// 	return (
// 		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// 			<Text>HR!</Text>
// 		</View>
// 	);
// }
// function Applicant() {
// 	return (
// 		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// 			<Text>Applicant!</Text>
// 		</View>
// 	);
// }

// function Setting() {
// 	return (
// 		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// 			<Text>Setting!</Text>
// 		</View>
// 	);
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
// 	return (
// 		<Tab.Navigator
// 			initialRouteName='HomePage'
// 			screenOptions={{
// 				tabBarActiveTintColor: "#e91e63",
// 			}}>
// 			<Tab.Screen
// 				name='HomePage'
// 				component={HomePage}
// 				options={{
// 					tabBarLabel: "Home",
// 					tabBarIcon: ({ color, size }) => (
// 						<MaterialCommunityIcons name='home' color={color} size={size} />
// 					),
// 				}}
// 			/>

// 			<Tab.Screen
// 				name='Company'
// 				component={Company}
// 				options={{
// 					tabBarLabel: "Company",
// 					tabBarIcon: ({ color, size }) => (
// 						<MaterialCommunityIcons
// 							name='office-building'
// 							color={color}
// 							size={size}
// 						/>
// 					),
// 				}}
// 			/>

// 			<Tab.Screen
// 				name='HR'
// 				component={HR}
// 				options={{
// 					tabBarLabel: "HR",
// 					tabBarIcon: ({ color, size }) => (
// 						<MaterialCommunityIcons name='account' color={color} size={size} />
// 					),
// 				}}
// 			/>
// 			<Tab.Screen
// 				name='Applicant'
// 				component={Applicant}
// 				options={{
// 					tabBarLabel: "Applicant",
// 					tabBarIcon: ({ color, size }) => (
// 						<MaterialCommunityIcons
// 							name='nature-people'
// 							color={color}
// 							size={size}
// 						/>
// 					),
// 				}}
// 			/>
// 			<Tab.Screen
// 				name='Setting'
// 				component={Setting}
// 				options={{
// 					tabBarLabel: "Setting",
// 					tabBarIcon: ({ color, size }) => (
// 						<MaterialCommunityIcons
// 							name='settings-helper'
// 							color={color}
// 							size={size}
// 						/>
// 					),
// 				}}
// 			/>
// 		</Tab.Navigator>
// 	);
// }

// export default function HomePageAdmin() {
// 	return (
// 		<NavigationContainer>
// 			<MyTabs />
// 		</NavigationContainer>
// 	);
// }
