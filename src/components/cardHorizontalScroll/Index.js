import React from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Styles from "./Style";
import ItemCard from "../itemCard/Index";

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
        <Text numberOfLines={2} ellipsizeMode="tail" style={Styles.title}>
          {categoryName}
        </Text>
        <TouchableOpacity onPress={handleNavigateCategory}>
          <Text style={Styles.viewMoreButtonText}>Mostrar Mais</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigateItem(item.id)}>
            <View style={Styles.card}>
              <ItemCard item={item} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CardHorizontalScroll = ({ items }) => {
  const filteredItems = items.filter((objeto) => objeto.services.length != 0);

  return (
    <View style={Styles.itemList}>
      {!!filteredItems.length && (
        <ItemList
          key={filteredItems[0].id}
          items={filteredItems[0].services}
          categoryName={filteredItems[0].name}
          categoryId={filteredItems[0].id}
        />
      )}
    </View>
  );
};

export default CardHorizontalScroll;
