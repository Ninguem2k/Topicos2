import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

import api from "../../services/api";
import Styles from "./Style";

import ItemList from "../../components/listItemCard/Index";
import FilterBar from "../../components/filterBar/Index";
import Search from "../../components/search/Index";

const filterOptions = {
    Novidades: "recentDate",
    Tradicionais: "oldDate",
    "Menor valor": "lowerPrice",
    "Maior valor": "higherPrice",
};

export function SearchScreen() {
    const route = useRoute();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("Todos");

    const [isViewVisible, setIsViewVisible] = useState(false);

    const toggleView = () => {
        setIsViewVisible(!isViewVisible);
    };

    const filters = [
        "Todos",
        "Novidades",
        "Menor valor",
        "Tradicionais",
        "Maior valor",
    ];

    function realFilters() {
        return filterOptions[activeFilter] || null;
    }

    useEffect(() => {
        const seatchParams = `${route.params?.input || 'a'}/?cep=38640-000&order=${realFilters()}`;
        async function fetchItems() {
            try {
                const response = await api.get("/services/search/" + seatchParams);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchItems();
    }, [route.params?.input, activeFilter]);

    const Menu = () => {
        return (
            <TouchableOpacity onPress={toggleView} style={Styles.buttonMenu}>
                <Icon name={'menu'} size={25} color="white" />
            </TouchableOpacity>
        );
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.textTop}>Encontre o que você procura!</Text>
            <View style={Styles.containerSearch}>
                <View style={Styles.contentSearch}>
                    <Search />
                </View>
                <View style={Styles.contentMenu}>
                    <Menu />
                </View>
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : items.length === 0 ? (
                <Text style={Styles.msgNotFoundItems}>Faça uma Busca.</Text>
            ) : (
                <View style={Styles.container}>
                    {isViewVisible && (
                        <FilterBar
                            filters={filters}
                            activeFilter={activeFilter}
                            setActiveFilter={setActiveFilter}
                        />
                    )}
                    <Text style={Styles.listServicesTitle}>Resultado</Text>
                    <ScrollView style={Styles.listServices}>
                        <ItemList items={items} />
                    </ScrollView>
                </View>
            )}
        </View>
    );
}
