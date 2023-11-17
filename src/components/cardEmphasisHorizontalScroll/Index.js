import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Styles from "./Style";
import ItemCardEmphasis from "../itemCardEmphasis/Index";

const ItemList = ({ categoryName, categoryId, items }) => {
    const navigation = useNavigation();

    const handleNavigateCategory = () => {
        navigation.navigate("CategoriesScreen", { id: categoryId });
    };

    const handleNavigateItem = (itemId) => {
        navigation.navigate("DetailsScreen", { id: itemId });
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.cardText}>
                <Text numberOfLines={2}
                    ellipsizeMode="tail" style={Styles.title}>Destaque</Text>
                <TouchableOpacity onPress={handleNavigateCategory}>
                    <Text style={Styles.viewMoreButtonText}>mostrar Mais</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {!!items.length &&
                    items.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handleNavigateItem(item.id)}
                        >
                            <View style={Styles.card}>
                                <ItemCardEmphasis item={item} />
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    );
};

const CardEmphasisHorizontalScroll = ({ items }) => {
    return (
        <View style={Styles.itemList}>
            {!!items.length &&
                items.map((objeto) => (
                    <ItemList
                        key={objeto.id}
                        items={objeto.services}
                        categoryName={objeto.name}
                        categoryId={objeto.id}
                    />
                ))}
        </View>
    );
};

export default CardEmphasisHorizontalScroll;
