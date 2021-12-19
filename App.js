/** @format */

import React, { useState, useEffect, useRef }  from "react";
import Welcome from "./src/screens/general/Welcome";
import Login from "./src/screens/general/Login";
import Register from "./src/screens/general/Register";
import InvitationPage from "./src/screens/applicant/InvitationPage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageAdmin from "./src/screens/admin/HomePageAdmin";
import HomePageHR from "./src/screens/hr/HomePageHR";
import HomePageApplicant from "./src/screens/applicant/HomePageApplicant";
const Stack = createStackNavigator();
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
	  shouldShowAlert: true,
	  shouldPlaySound: false,
	  shouldSetBadge: false,
	}),
  });  

export default function App() {	
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName='Welcome'>
				<Stack.Screen name='Welcome' component={Welcome} />

				<Stack.Screen name='InvitationPage' component={InvitationPage} />

				<Stack.Screen name='HPAdmin' component={HomePageAdmin} />
				<Stack.Screen name='HPApplicant' component={HomePageApplicant} />
				<Stack.Screen name='HPHR' component={HomePageHR} />

				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
