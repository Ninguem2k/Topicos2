import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "./Style";
import React from "react";


const ElementsCards = ({ Texts }) => {
    const navigation = useNavigation();

    function handleNavigateCategory(imput) {
        navigation.navigate("CategoriesScreen", { id: imput });
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.element}>
                <Text style={Styles.text}>{Texts}</Text>
            </View>
        </View>
    );
};

export default ElementsCards;