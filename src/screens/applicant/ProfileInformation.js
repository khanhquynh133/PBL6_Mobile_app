import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import COLORS from "../../consts/colors";
const ProfileInformation = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/backArrow.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/DHA.png")}
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -70,
            }}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
            Duong Van Chinh
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
            Intern
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.profileComponent}>
            <Icon name="laptop-code" color="#adadad" size={20} />
            <Text> Developer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.profileComponent}>
            <Icon name="map-marker-alt" color="#adadad" size={20} />
            <Text>146 nguyen hoang</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.profileComponent}>
            <Icon name="link" color="#adadad" size={20} />
            <Text>GitHub Link : https://github.com/yua2307 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.profileComponent}>
            <Text> Language :</Text>
            <Text>C# , Java , PHP , JavaScript</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.profileLogout}>
            <Icon name="sign-out-alt" color="#adadad" size={20} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: 10,
                color: COLORS.white,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileInformation;
const styles = StyleSheet.create({
  header: {
    padding: 10,
    width: "100%",
    backgroundColor: COLORS.blue,
    height: 150,
  },
  profileComponent: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    paddingBottom: 20,
    borderRadius: 19,
    shadowOpacity: 50,
    elevation: 15,
    marginTop: 40,
  },
  profileLogout: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.blue,
    width: "90%",
    padding: 20,
    paddingBottom: 22,
    borderRadius: 19,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 40,
  },
});
