import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import WhatsappButton from "../../components/whatsappButton/Index";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Styles from "./Style";

const ItemCard = ({ item }) => {
    const { id, images, title, price, rating, discount } = item;
    const navigation = useNavigation();

    function handleNavigateItem(imput) {
        navigation.navigate("DetailsScreen", { id: imput });
    }

    return (
        <TouchableOpacity onPress={() => handleNavigateItem(id)}>
            <View style={Styles.container}>
                <Image source={{ uri: images[0] }} style={Styles.image} />
                <View style={Styles.infoContainer}>
                    <Text style={Styles.name}>{title}</Text>
                    <View style={Styles.rating}>
                        {[...Array(5)].map((_, i) => (
                            <Feather
                                key={i}
                                name="star"
                                size={14}
                                color={
                                    i < Math.floor(rating) ? "#FFD700" : "#CCC"
                                }
                            />
                        ))}
                    </View>
                    <Text style={Styles.price}>R${price}</Text>
                    <Text style={Styles.discount}>R${price - discount}</Text>
                </View>
                <WhatsappButton />
            </View>
        </TouchableOpacity>
    );
};

const ItemList = ({ items }) => {
    return (
        <View style={Styles.itemList}>
            {items.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </View>
    );
};

export default ItemList;
