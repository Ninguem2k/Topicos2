import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        width: "93%",
        justifyContent: "center",
        zIndex: 99,
        backgroundColor: "#f2f4f5",
        borderRadius: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    icon: {
        marginLeft: 5,
        marginRight: 5,
    },
});

export default styles;
