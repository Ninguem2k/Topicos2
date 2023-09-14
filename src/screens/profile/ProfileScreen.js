import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";
import ItemList from "../../components/listItemCard/Index";
import CardUser from "../../components/cardUser/Index";
import api from "../../services/api";
import Styles from "./Style";

export function ProfileScreen() {
    const [items, setItems] = useState([]);
    const [user, setUser] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchApi() {
            try {
                const responseUser = await api.get(
                    "/users?id=" + route.params?.id
                );
                const responseItems = await api.get(
                    "/items?id_user=" + route.params?.id
                );
                setUser(responseUser.data[0]);
                setItems(responseItems.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchApi();
    }, [route.params?.id]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: user.name,
        });
    }, [user]);

    return (
        <View style={Styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <>
                    <View style={Styles.profile}>
                        {user && <CardUser user={user} />}
                    </View>
                    <ScrollView>
                        <ItemList items={items} />
                    </ScrollView>
                </>
            )}
        </View>
    );
}
