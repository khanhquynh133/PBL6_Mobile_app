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
import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import axios from "axios";
import { GET_COMPANY_URL, GET_APPLICANTS_URL, GET_HR_URL } from "../../config";
import IsLoading from "../../components/Loading";
const Home = ({ navigation }) => {
  const [totalCompany, setTotalCompany] = useState(0);
  const [totalApplicant, setTotalApplicant] = useState(0);
  const [totalHR, setTotalHR] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getApi = async () => {
      setIsLoading(true);
      const companies = await axios.get(GET_COMPANY_URL);
      const applicants = await axios.get(GET_APPLICANTS_URL);
      const hrs = await axios.get(GET_HR_URL);
      setTotalCompany(companies.data.totalCount);
      setTotalApplicant(applicants.data.totalCount);
      setTotalHR(hrs.data.totalCount);
      setIsLoading(false);
    };

    getApi();
  }, []);
  return isLoading ? (
    <IsLoading />
  ) : (
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
        }}
      >
        HREO DASH
      </Text>
      <ScrollView
        style={{ marginTop: 50 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Cards
          onPress={() => navigation.navigate("TotalCompany")}
          icon="home"
          title="TOTAL COMPANY"
          number={totalCompany}
        />
        <Cards
          onPress={() => navigation.navigate("TotalApplicant")}
          icon="person"
          title="TOTAL APPLICANTS"
          number={totalApplicant}
        />
        <Cards
          onPress={() => navigation.navigate("TotalHR")}
          icon="people"
          title="TOTAL HR"
          number={totalHR}
        />
      </ScrollView>
    </View>
  );
};
export default Home;
