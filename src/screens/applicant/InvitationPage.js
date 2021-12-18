/** @format */

// import * as React from "react";
// import invitations from "../../consts/invitations";
// import NotificationComponent from "../../components/Applicant/NotificationComponent";
// import { FlatList, SafeAreaView } from "react-native";
// const InvitationPage = () => {
//   return (
//     <SafeAreaView>
//       {invitations.map((item) => (
//         <NotificationComponent invitation={item} />
//       ))}
//
//     </SafeAreaView>
//   );
// };

// export default InvitationPage;
////
/** @format */

import React from "react";
import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	FlatList,
	Image,
	Dimensions,
	Button,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import invitations from "../../consts/invitations";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const InvitationPage = () => {
	const NotificationComponent = ({ invitation }) => {
		return (
			<TouchableOpacity style={styles.container}>
				<View style={styles.titleContainer}>
					<View style={{ flexDirection: "column", display: "flex" }}>
						<Image
							source={invitation.image}
							style={{
								width: 100,
								height: 100,
								borderRadius: 100,
								marginRight: 20,
								marginTop: 10,
								resizeMode: "contain",
							}}
						/>
					</View>
					<View>
						<View style={styles.contentElement}>
							<Icon
								name='building'
								color='#adadad'
								size={20}
								style={{ marginRight: 5 }}
							/>
							<Text style={styles.textContent}>{invitation.company}</Text>
						</View>
						<View style={styles.contentElement}>
							<Icon1
								name='person'
								color='#adadad'
								size={20}
								style={{ marginRight: 5 }}
							/>
							<Text style={styles.textContent}>HR {invitation.HRName}</Text>
						</View>
						<View style={styles.contentElement}>
							<Icon1
								name='ios-code-slash'
								color='#adadad'
								size={20}
								style={{ paddingRight: 5 }}
							/>
							<Text style={styles.textContent}>{invitation.position}</Text>
						</View>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<TouchableOpacity style={styles.containerButton}>
								<Text style={styles.buttonTextConfirm}>Confirm</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.containerButton}>
								<Text style={styles.buttonTextCancel}>Cancel</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView>
			<FlatList
				// columnWrapperStyle={{ justifyContent: "space-between" }}
				// showsVerticalScrollIndicator={false}
				// contentContainerStyle={{
				// 	marginTop: 10,
				// 	paddingBottom: 50,
				// }}
				// numColumns={2}
				data={invitations}
				renderItem={({ item }) => {
					return <NotificationComponent invitation={item} />;
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		borderColor: "lightgrey",
		borderWidth: 1,
		height: HEIGHT * 0.18,
		backgroundColor: "white",
		borderRadius: 8,
		marginBottom: 5,
		borderRadius: 20,
		shadowOpacity: 20,
		marginTop: 10,
		marginBottom: 10,
	},
	contentElement: {
		marginLeft: 16,
		alignSelf: "flex-start",
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#fff",
		marginTop: 5,
	},
	textContent: {
		fontSize: 16,
		fontWeight: "700",
		marginBottom: 5,
	},
	titleContainer: {
		padding: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	containerButton: {
		marginRight: 4,
		width: WIDTH * 0.2,
		borderRadius: 10,
		height: HEIGHT * 0.04,
		backgroundColor: "#73C2F9",
		marginHorizontal: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonTextConfirm: {
		color: "#184785",
		fontWeight: "bold",
	},
	buttonTextCancel: {
		color: "red",
		fontWeight: "bold",
	},
});
export default InvitationPage;
