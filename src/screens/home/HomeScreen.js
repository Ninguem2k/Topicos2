import CardHorizontalScroll from "../../components/cardHorizontalScroll/Index";
import CardCategory from "../../components/cardCategory/Index";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import Search from "../../components/search/Index";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Styles from "./Style";

export function HomeScreen() {
    const [items, setItems] = useState("");
    const [categorys, setCategorys] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchApi() {
            try {
                const responseCategorys = await api.get("/categorys");
                const responseItems = await api.get("/items");
                setCategorys(responseCategorys.data);
                setItems(responseItems.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchApi();
    }, []);

    return (
        <View style={Styles.container}>
        <ScrollView>
            <Text style={Styles.greetingText}>Olá, seja bem-vindo!</Text>
            <Search />
            {isLoading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <>
                    <CardCategory categorys={categorys} />
                    <CardHorizontalScroll items={items} />
                </>
            )}
        </ScrollView>
    </View>
    );
}
