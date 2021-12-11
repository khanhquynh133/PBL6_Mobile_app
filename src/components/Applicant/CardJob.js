import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
const CardJob = ({ job }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
      <View style={styles.cartJob}>
        <View
          style={{
            height: 80,
          }}
        >
          <Image
            source={job.img}
            style={{
              width: 80,
              height: 80,
              resizeMode: "center",
              marginLeft: 25,
              flex: 1,
            }}
            r
          />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            marginTop: 10,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {job.name}
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
              fontSize: 12,
              fontWeight: "bold",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {job.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardJob;
