import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const NotificationComponent = ({ invitation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: "column", display: "flex" }}>
          <Image
            source={require("../../assets/images/DHA.png")}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              marginLeft: 10,
              marginTop: 10,
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <View style={styles.contentElement}>
            <Icon
              name="building"
              color="#adadad"
              size={20}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.textContent}>{invitation.company}</Text>
          </View>
          <View style={styles.contentElement}>
            <Icon
              name="users"
              color="#adadad"
              size={20}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.textContent}>HR {invitation.HRName}</Text>
          </View>
          <View style={styles.contentElement}>
            <Icon
              name="map-pin"
              color="#adadad"
              size={20}
              style={{ paddingRight: 25 }}
            />
            <Text style={styles.textContent}>{invitation.position}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <TouchableOpacity style={styles.containerButton}>
              <Button title="Confirm" style={styles.buttonTextConfirm} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton}>
              <Button title="Cancel" style={styles.buttonTextCancel} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: "lightgrey",
    borderWidth: 1,
    height: HEIGHT * 0.25,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 5,
    borderRadius: 20,
    shadowOpacity: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  contentElement: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: 5,
  },
  textContent: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 5,
    marginBottom: 5,
  },
  titleContainer: {
    padding: 5,
    flexDirection: "row",
  },
  containerButton: {
    marginLeft: 20,
    width: WIDTH * 0.2,
    borderRadius: 10,
    height: HEIGHT * 0.05,
    backgroundColor: "#73C2F9",
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextConfirm: {
    color: "white",
    fontWeight: "200",
    width: 200,
  },
  buttonTextCancel: {
    color: "red",
    fontWeight: "200",
    width: 200,
  },
});
export default NotificationComponent;
