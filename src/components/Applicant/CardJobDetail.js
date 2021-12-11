import * as React from "react";
import { Text, View, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Card, ListItem, Button } from "react-native-elements";
import styles from "./style";
const CardJobDetail = () => (
  <View style={styles.container}>
    <Card>
      <Card.Title style={styles.txtJobTitle}>
        Opportunity | Open Web Technology tuyển dụng .NET FRESHER có trợ cấp!
      </Card.Title>
      <Card.Divider />

      <View style={{ alignItems: "center", padding: 5 }}>
        <Card.Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "center",
            justifyContent: "center",
          }}
          source={require("../../assets/images/favicon.png")}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 20, justifyContent: "center" }}>
            <Icon name="building" color="#adadad" size={13} />
          </View>
          <View>
            <Text>Open Web VietNam</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 20, justifyContent: "center" }}>
            <Icon name="map-marker-alt" color="#adadad" size={13} />
          </View>
          <View>
            <Text>146 Nguyen Hoang</Text>
          </View>
        </View>
      </View>
      <Card.Divider />
      <Text style={{ marginBottom: 10, textAlign: "center" }}>
        Open Web Technology đang cần tìm kiếm những bạn trẻ đầy nhiệt huyết mong
        muốn học hỏi để tham gia vào các dự án chiến lược trong tương lai của
        công ty.
      </Text>
      <Button title="Apply Now" />
      <Card.Divider />
      <Button title="Add To Your Favorites" />
    </Card>
  </View>
);

export default CardJobDetail;
