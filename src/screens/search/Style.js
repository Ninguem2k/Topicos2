import { StyleSheet } from "react-native";

const COLORS = {
    primary: "#3555fc",
    secondary: "#ffcc00",
    white: "#FFF",
    black: "#000",
    gray: "#CCC",
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    msgNotFoundItems: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 13,
        color: COLORS.gray,
    },
    textTop: {
        marginTop: 60,
        marginLeft: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.black,
    },
    containerSearch: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
    },
    contentSearch: {
        left: -15,
        width: "80%",
    },
    contentMenu: {
        left: -15,
        width: "10%",
        zIndex: 1000
    },

    buttonMenu: {
        backgroundColor: 'blue',
        borderRadius: 30,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 8,
    },
    listServices: {
        top: 20,
        marginBottom: 14,
    },
    listServicesTitle: {
        top: 10,
        left: 10,
        fontSize: 22,
        color: COLORS.black,
    },
});

export default Styles;