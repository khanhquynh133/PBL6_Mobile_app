/** @format */

import React from "react";

import Welcome from "./src/screens/general/Welcome";
import Login from "./src/screens/general/Login";
import Register from "./src/screens/general/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName='Welcome'>
				<Stack.Screen name='Welcome' component={Welcome} />
				<Stack.Screen name='Register' component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
