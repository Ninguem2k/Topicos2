import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        marginTop: 20,
        margin: 10,
    },

    card: {
        flex: 1,
        width: 180,
        height: 240,
        marginLeft: 5,
        marginEnd: 25,
    },

    cardText: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        maxWidth: 180,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 5,
        marginBottom: 5,
    },
    viewMoreButtonText: {
        fontSize: 15,
        color: "#3580f2",
        fontWeight: "bold",
        alignSelf: "flex-end",
    },
});

export default Styles;
