import { useRoute, useNavigation } from "@react-navigation/native";
import ItemList from "../../components/listItemCard/Index";
import { useState, useEffect, useLayoutEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import api from "../../services/api";

export function CategoriesScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItem] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        async function fetchItems() {
            const response = await api.get(
                "/items?category_like=" + route.params?.name
            );
            setItem(response.data);
        }
        fetchItems();
    }, [route.params?.name]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await api.get(
                    "/items?category_like=" + route.params?.name
                );
                setItem(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchItems();
    }, [route.params?.name]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.name,
        });
    }, [navigation]);

    return (
        <ScrollView>
            {isLoading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <>
                    <ItemList items={items} />
                </>
            )}
        </ScrollView>
    );
}
