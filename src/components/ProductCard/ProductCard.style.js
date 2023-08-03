import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#bdbdbd",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    backgroundColor: "#eeeeee",
    margin: 10,
    flexDirection: "row",
  },
  icon_container: {
    flex:1,
    flexDirection: "row",
    margin:2,
  },
  icon:{
    marginTop:2,
  },
  rate:{
    fontSize:16,
    fontWeight:'bold',
  },
  body_container: {
    padding: 5,
    flex: 1,
    backgroundColor: "#FAF3F0",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  category_container: {
    backgroundColor:'#D8D9DA',
    margin:5,
    maxWidth:120,
  },
  category:{
   fontWeight:'bold',
   textTransform:"capitalize",
   textAlign: "center",

  },
  price: {
    textAlign: "right",
    fontSize: 16,
    fontStyle: "italic",
  },
});
