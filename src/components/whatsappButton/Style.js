import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  button: {
    backgroundColor: "#E7E7FF",
    borderRadius: 50,
    padding: 10,
    margin: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    flex:1,
    textAlign: "center",  
    color: "#6B4EFF",
    fontSize: 18,
  },
  iconCart: {
    right: 10,
    marginLeft: "auto", 
  },
});

export default Styles;
