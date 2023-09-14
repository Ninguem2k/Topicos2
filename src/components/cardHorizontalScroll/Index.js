import React from "react";
import Styles from "./Style";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

import ItemCard from "../itemCard/Index";
import { useNavigation } from "@react-navigation/native";

const ItemList = ({ items }) => {
    const navigation = useNavigation();

    function handleNavigateCategory(imput) {
        navigation.navigate("CategoriesScreen", { name: imput });
    }

    function handleNavigateItem(imput) {
        navigation.navigate("DetailsScreen", { id: imput });
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.cardText}>
                <Text style={Styles.title}>{items[0].category}</Text>

                <TouchableOpacity
                    onPress={() => handleNavigateCategory(items[0].category)}>
                    <Text style={Styles.viewMoreButtonText}>Ver Mais</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {items.map(item => (
                    <TouchableOpacity
                        onPress={() => handleNavigateItem(item.id)}>
                        <View style={Styles.card}>
                            <ItemCard item={item} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const CardHorizontalScroll = ({ items }) => {
    const groupedItems =
        !!items.length &&
        items.reduce((accumulator, currentProduct) => {
            const category = currentProduct.category;
            if (!accumulator[category]) {
                accumulator[category] = [];
            }
            accumulator[category].push(currentProduct);
            return accumulator;
        }, {});

    return (
        <View style={Styles.itemList}>
            {Object.values(groupedItems).map(categoryItems => (
                <ItemList key={categoryItems[0].id} items={categoryItems} />
            ))}
        </View>
    );
};

export default CardHorizontalScroll;
