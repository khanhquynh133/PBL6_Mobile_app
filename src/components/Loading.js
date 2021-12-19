import React from "react";
import { View, ActivityIndicator } from "react-native";

const IsLoading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#184785" />
    </View>
  );
};

export default IsLoading;
