/** @format */

import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Card, ListItem, Button } from "react-native-elements";
import styles from "./style";
const CardJobDetail = ({ navigation, route }) => {
	const { job } = route.params;
	return (
		<View style={styles.container}>
			<Card>
				<Card.Title style={styles.txtJobTitle}>{job.name}</Card.Title>
				<Card.Divider />

				<View style={{ alignItems: "center", padding: 5 }}>
					<Card.Image
						style={{
							width: 100,
							height: 100,
							resizeMode: "center",
							justifyContent: "center",
						}}
						source={job.img}
					/>
					<View style={{ flexDirection: "row", marginTop: 10 }}>
						<View style={{ width: 20, justifyContent: "center" }}>
							<Icon name='code' color='#adadad' size={13} />
						</View>
						<View>
							<Text>{job.description}</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row" }}>
						<View style={{ width: 20, justifyContent: "center" }}>
							<Icon name='map-marker-alt' color='#adadad' size={13} />
						</View>
						<View>
							<Text>{job.address}</Text>
						</View>
					</View>
				</View>
				<Card.Divider />
				<Text style={{ marginBottom: 10, textAlign: "center" }}>
					{job.about}
				</Text>
				{/* <Button title='Apply Now' /> */}
				<Card.Divider />
				<TouchableOpacity
					style={{
						alignItems: "center",

						backgroundColor: "#426EB4",
						padding: 10,
						height: 40,
						width: 200,
						borderRadius: 20,
						marginLeft: 70,
					}}
					onPress={() => navigation.navigate("Company")}>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: 16,
							color: "#FFF",
							textAlign: "center",
						}}>
						Care this post
					</Text>
				</TouchableOpacity>
			</Card>
		</View>
	);
};

export default CardJobDetail;
