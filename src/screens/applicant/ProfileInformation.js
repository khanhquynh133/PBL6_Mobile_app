/** @format */

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
import Icon1 from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import IsLoading from "../../components/Loading";
import { GET_INFO_CURRENT_USER } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileInformation = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userAbp, setUserAbp] = useState({});
  const [role, setRole] = useState("");
  const [company, setCompany] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("_token");
      const role = await AsyncStorage.getItem("role");

      const response = await axios.get(GET_INFO_CURRENT_USER, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (role === "hr") {
        setCompany(response.data.branch.company);
      }
      setUserInfo(response.data);
      setUserAbp(response.data.userAbp);
      setRole(role);

      setIsLoading(false);
    };
    getUserInfo();
  }, []);
  return isLoading ? (
    <IsLoading />
  ) : (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Icon1 name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri:
                Object.keys(company).length === 0
                  ? "https://tranghnp309.blob.core.windows.net/contain1/VND.jpg"
                  : "https://tranghnp309.blob.core.windows.net/contain1/chinh.jpg",
            }}
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -70,
            }}
          />

          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
            {userAbp.name}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
            {Object.keys(company).length === 0
              ? userInfo.level
              : `HR of ${company.name}`}
          </Text>
          {Object.keys(company).length !== 0 ? (
            <View style={{ alignItems: "center" }}>
              <Image
                source={{ uri: `${company.logoUrl}` }}
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 100,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "grey",
                  marginTop: 10,
                }}
              >
                {company.name}
              </Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>

        <TouchableOpacity>
          <View style={styles.profileComponent}>
            <Icon
              name="laptop-code"
              color="#adadad"
              size={20}
              style={{ marginRight: 12 }}
            />
            <Text>
              {Object.keys(company).length === 0
                ? `${userInfo.level} ${userInfo.language}`
                : ` Phone number 0935204877`}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.profileComponent}>
            <Icon
              name="map-marker-alt"
              color="#adadad"
              size={20}
              style={{ marginRight: 12 }}
            />
            <Text>{userInfo.workAddress}</Text>
          </View>
        </TouchableOpacity>
        {Object.keys(company).length === 0 ? (
          <View>
            <TouchableOpacity>
              <View style={styles.profileComponent}>
                <Icon
                  name="link"
                  color="#adadad"
                  size={20}
                  style={{ marginRight: 12 }}
                />
                <Text>Github Link : {userInfo.githubLink}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.profileComponent}>
                <Icon
                  name="code"
                  color="#adadad"
                  size={20}
                  style={{ marginRight: 12 }}
                />
                <Text> Language : {userInfo.language}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
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
