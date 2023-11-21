import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Styles from "./Style";
import React from "react";

import ElementsCards from "../elementsCards/Index";

const ItemCardEmphasis = ({ item }) => {
    const coverSelect = !item.images ? item.images[0].url : "https://cdn1.staticpanvel.com.br/produtos/15/produto-sem-imagem.jpg";
    return (
        <View style={Styles.container}>
            <Image
                source={{ uri: coverSelect }}
                style={Styles.cover}
            />

            <View style={Styles.info}>
                <ElementsCards Texts={item.name} />
                <ElementsCards Texts={"R$ " + item.price} />
            </View>

        </View>
    );
};

export default ItemCardEmphasis;
