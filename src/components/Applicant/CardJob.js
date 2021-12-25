/** @format */

import * as React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import IsLoading from "../../components/Loading";
import { useState, useEffect } from "react";
const width = Dimensions.get("window").width / 2 - 30;
const CardJob = ({ navigation, job, post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (!!post) {
      console.log(post);
      setIsFavorite(post.isFavorite);
      setIsLoading(false);
    }
  }, [post]);
  return isLoading ? (
    <IsLoading />
  ) : (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("CardJobDetail", {
          post: post,
        })
      }
    >
      <View
        style={{
          justifyContent: "center",
          height: 225,
          backgroundColor: COLORS.light,
          width,
          marginHorizontal: 2,
          borderRadius: 10,
          marginBottom: 20,
          padding: 15,
        }}
      >
        <View
          style={{
            height: 80,
          }}
        >
          <Image
            source={{ uri: post.branch.company.logoUrl }}
            style={{
              alignItems: "center",
              width: 100,
              height: 100,
            }}
            r
          />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
            marginTop: 40,
            alignItems: "center",
          }}
        >
          {post.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              fontSize: 10,
            }}
          >
            {post.level} {post.language}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setTimeout(() => {
                setIsFavorite(!isFavorite);
              }, 800);
            }}
          >
            <Icon
              name={isFavorite ? "favorite" : "favorite-border"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardJob;
