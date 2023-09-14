import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import ItemList from "../../components/listItemCard/Index";
import FilterBar from "../../components/filterBar/Index";
import { useRoute } from "@react-navigation/native";
import Search from "../../components/search/Index";
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Styles from "./Style";

export function SearchScreen() {
    const route = useRoute();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await api.get(
                    "/items?title_like=" + route.params?.input
                );
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchItems();
    }, [route.params?.input]);

    const filters = [
        "Todos",
        "Populares",
        "Novidades",
        "Maior valor",
        "Menor valor",
    ];
    const [activeFilter, setActiveFilter] = useState("Todos");

    return (
        <View style={Styles.container}>
            <View style={Styles.containerSearch}>
                <Search />
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <>
                    {items.length === 0 ? (
                        <Text style={Styles.msgNotFoundItems}>
                            Infelizmente, ainda não temos o que você está
                            procurando.
                        </Text>
                    ) : (
                        <View style={Styles.container}>
                            <FilterBar
                                filters={filters}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                            />
                            <ScrollView>
                                <ItemList items={items} />
                            </ScrollView>
                        </View>
                    )}
                </>
            )}
        </View>
    );
}
