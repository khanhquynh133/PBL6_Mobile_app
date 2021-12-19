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
import DetailHR from "./DetailHR";
import Applicant from "../admin/Applicant";
import Login from "../general/Login";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import COLORS from "../../consts/colors";
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
			<Stack.Screen name='DetailHR' component={DetailHR} />
		</Stack.Navigator>
	);
}
function tabApplicant() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='HRR'>
			<Stack.Screen name='HRR' component={Applicant} />
			<Stack.Screen name='DetailCompany' component={DetailCompany} />
		</Stack.Navigator>
	);
}

function tabSetting({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
				<View
					style={{
						alignSelf: "center",
						flexDirection: "row",
						justifyContent: "center",
						backgroundColor: COLORS.blue,
						width: "90%",
						padding: 20,
						paddingBottom: 20,
						borderRadius: 19,
						shadowOpacity: 80,
						elevation: 15,
						marginTop: 20,
					}}>
					<Icon1
						name='sign-out-alt'
						color='#adadad'
						size={20}
						style={{ marginRight: 12 }}
					/>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "bold",
							marginLeft: 10,
							color: COLORS.white,
						}}>
						LOGOUT
					</Text>
				</View>
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
						<Icon name='people-circle-sharp' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Applicant'
				component={tabApplicant}
				options={{
					tabBarLabel: "Applicant",
					tabBarIcon: ({ color, size }) => (
						<Icon name='people' color={color} size={size} />
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

const HomePageAdmin = () => {
	return <MyTabs />;
};
export default HomePageAdmin;
