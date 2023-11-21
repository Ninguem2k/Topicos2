import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";

import CardHorizontalScroll from "../../components/cardHorizontalScroll/Index";
import CardCategory from "../../components/cardCategory/Index";
import CardEmphasisHorizontalScroll from "../../components/cardEmphasisHorizontalScroll/Index";
import { AuthContext } from "../../services/AuthContext";
import Search from "../../components/search/Index";
import api from "../../services/api";
import Styles from "./Style";

export function HomeScreen() {
    const [items, setItems] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [emphasis, setEmphasis] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { loginWithToken } = useContext(AuthContext);

    useEffect(() => {
        async function login() {
            await loginWithToken();
        }
        login();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCategorys = await api.get("/categories");
                const responseItems = await api.get("/categories/home");
                const responseItemsEmphasis = await api.get("/emphasis/services");
                setCategorys(responseCategorys.data);
                setItems(responseItems.data);
                setEmphasis(responseItemsEmphasis);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={Styles.container}>
            <ScrollView>
                <Text style={Styles.greetingText}>Olá, seja bem vindo!</Text>
                <Search />
                {isLoading ? (
                    <ActivityIndicator size="large" color="#000" />
                ) : (
                    <>
                        <CardCategory  categorys={categorys.data} />
                        <CardEmphasisHorizontalScroll items={items.data} />
                        <CardHorizontalScroll items={items.data} />
                    </>
                )}
            </ScrollView>
        </View>
    );
}
