import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderRadius: 25,
    width: 370,
    height: 144,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    top: -6,
    margin: 10,
    borderRadius: 20,
    width: 165,
    height: 110,
  },
  cardImage: {
    flex: 1,
  },
  rating: {
    position: "absolute",
    top: 100,
    right: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 25,
    borderRadius: 10,
    backgroundColor: "#000",
    borderColor: "#FFF",
    borderWidth: 2,
  },
  ratingText: {
    color: "#FFF",
    fontSize: 14,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 2,
    padding: 5,
  },
  name: {
    maxWidth: 140,
    numberOfLines: 1,
    ellipsizeMode: "tail",
    color: "#000",
    fontWeight: "bold",
    fontSize: 17,
  },
  price: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "gray",
  },
  discount: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  itemList: {
    paddingHorizontal: 13,
  },
  WhatsappButton: {
    left: 10,
    maxWidth: 160,
  },
});

export default styles;
