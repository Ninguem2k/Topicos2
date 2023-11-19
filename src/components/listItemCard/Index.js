import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import Styles from "./Style";
import WhatsappButton from "../../components/whatsappButton/Index";

const ItemCard = ({ item }) => {
    const { id, images, name, price, discount } = item;
    const navigation = useNavigation();

    const handleNavigateItem = () => {
        navigation.navigate("DetailsScreen", { id });
    };

    const coverSelect =
        images.length !== 0
            ? images[0].url
            : "https://cdn1.staticpanvel.com.br/produtos/15/produto-sem-imagem.jpg";

    return (
        <TouchableOpacity onPress={handleNavigateItem}>
            <View style={Styles.container}>
                <View style={Styles.cardImage}>
                    <Image source={{ uri: coverSelect }} style={Styles.image} />
                    <View style={Styles.rating}>
                        <Icon name={"star"} size={15} color="#ff0" />
                        <Text style={Styles.ratingText}>{"4"}</Text>
                    </View>
                </View>
                <View style={Styles.infoContainer}>
                    <Text style={[Styles.name, { maxWidth: 175 }]} numberOfLines={1} ellipsizeMode="tail">
                        {name}
                    </Text>
                    {discount >= 0 && <Text style={Styles.price}>R${price}</Text>}
                    <Text style={Styles.discount}>R${price - discount}</Text>
                    <View style={Styles.WhatsappButton}>
                        <WhatsappButton />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const ItemList = ({ items }) => {
    return (
        <View style={Styles.itemList}>
            {!!items.length && items.map((item) => <ItemCard key={item.id} item={item} />)}
        </View>
    );
};

export default ItemList;
