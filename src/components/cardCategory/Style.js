import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: "center",
    },

    card: {
        width: 60,
        height: 55,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#FFF",
        borderColor: "#CCC",
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    
    cardContent: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        margin: 2,
    },

    cardCategorie: {
        backgroundColor: "#F200",
        width: "100%",
        height: 40,
        padding: 10,
        borderWidth: 2,
        borderRadius: 50,
    },

    title: {
        fontSize: 12,
        fontWeight: "bold",
        // maxWidth: 90,
        textAlign: "center",
    },

    cover: {
        width: 50,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Styles;
