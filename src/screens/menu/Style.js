import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 10,
        paddingVertical: 32,
    },
    cardButtons: {
        flexDirection: "column",
        padding: 15,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: "bold",
    },
    login: {
        flexDirection: "row-reverse",
        padding: 5,
    },
    buttonTextLogin: {
        width: 175,
        backgroundColor: "#3555fc",
        color: "#FFF",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        marginLeft: 10,
        textAlign: "center",
    },
});

export default styles;
