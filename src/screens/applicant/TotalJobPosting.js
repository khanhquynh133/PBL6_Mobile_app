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
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import jobs from "../../consts/jobs";
import CardJob from "../../components/Applicant/CardJob";
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_POSTS_URL } from "../../config";
import IsLoading from "../../components/Loading";
const width = Dimensions.get("window").width / 2 - 30;

const TotalJobPosting = ({ navigation }) => {
  const [totalPost, setTotalPost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getJobApi = async () => {
      setIsLoading(true);
      const jobsApi = await axios.get(GET_POSTS_URL);
      console.log(jobsApi.data);
      setTotalPost(jobsApi.data);
      setIsLoading(false);
    };
    getJobApi();
  }, []);

  return isLoading ? (
    <IsLoading />
  ) : (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <View style={style.header}>
        <View>
          <Text
            style={{
              fontSize: 38,
              color: COLORS.blue,
              fontWeight: "bold",
            }}
          >
            HREO
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Job Postings
          </Text>
        </View>
      </View>
      {/* <View style={{ marginTop: 30, marginBottom: 20, flexDirection: "row" }}>
				<View style={style.searchContainer}>
					<Icon name='search' size={25} style={{ marginLeft: 20 }} />
					<TextInput placeholder='Search' style={style.input} />
				</View>
			</View> */}

      <View style={{ marginTop: 30, marginBottom: 20, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
      </View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={jobs}
        renderItem={({ item }) => {
          return <CardJob job={item} navigation={navigation} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: COLORS.blue,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.blue,
  },
  card: {
    justifyContent: "center",
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TotalJobPosting;
