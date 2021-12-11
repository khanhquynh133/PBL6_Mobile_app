const React = require("react-native");
const { Dimensions } = React;
const deviceWidth = Dimensions.get("window").width;
export default {
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    margin: 0,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  titleHeader: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#4a4848",
  },
  search: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    marginTop: 10,
  },
  txtSearch: {
    paddingLeft: 20,
  },
  inpSearch: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: deviceWidth - 100,
    marginBottom: 10,
    height: 45,
  },
  iconSearch: {
    padding: 10,
  },
  btnSearch: {
    width: 43,
    backgroundColor: "#6FAF98",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  card: {
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  detailJob: {
    padding: 10,
  },
  cartJob: {
    justifyContent: "space-between",

    height: 225,
    backgroundColor: "#F1F1F1",
    width: deviceWidth / 2 - 30,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginRight: 20,
  },
  cardJobDetail: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtJobTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#4a4848",
    textAlign: "center",
  },
  btnApply: {
    alignSelf: "center",
    backgroundColor: "#6FAF98",
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  txtApply: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 17,
  },
  line: {
    borderBottomColor: "#adadad",
    borderBottomWidth: 1,
  },
  desJob: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  inpName: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  txtInput: {
    paddingLeft: 20,
  },
  btnAdd: {
    alignSelf: "center",
    backgroundColor: "#6FAF98",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 5,
  },
  txtAdd: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 17,
  },
  txtAddJob: {
    marginBottom: 10,
  },
};
