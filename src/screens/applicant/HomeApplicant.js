/** @format */

import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cards from "../../components/Cards";
import TotalPosts from "./TotalPosts";
import axios from "axios";
import { GET_POSTS_URL } from "../../config";
import { useEffect, useState } from "react";
import IsLoading from "../../components/Loading";

const HomeApplicant = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: "#E0FFFF" }}>
			<Image
				style={{ width: 80, height: 80, alignSelf: "center", marginTop: 70 }}
				source={require("../../assets/images/logo.png")}
			/>
			<Text
				style={{
					color: "#2b3240",
					fontSize: 30,
					alignSelf: "center",
					marginTop: 10,
					fontWeight: "bold",
				}}>
				HREO DASH
			</Text>
			<ScrollView
				style={{ marginTop: 50 }}
				showsHorizontalScrollIndicator={false}
				horizontal>
				<Cards
					onPress={() => navigation.navigate("TotalPosts")}
					icon='md-newspaper-outline'
					title='TOTAL POSTS'
					number={totalPost}
				/>
			</ScrollView>
		</View>
	);
};
export default HomeApplicant;
