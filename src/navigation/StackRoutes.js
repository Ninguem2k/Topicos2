import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/home/HomeScreen";
import { MenuScreen } from "../screens/menu/MenuScreen";
import { LoginScreen } from "../screens/login/LoginScreen";
import { SearchScreen } from "../screens/search/SearchScreen";
import { AddItemScreen } from "../screens/addItem/AddItemScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { DetailsScreen } from "../screens/details/DetailsScreen";
import { CreateUserScreen } from "../screens/login/CreateUserScreen";
import { FavoritesScreen } from "../screens/favorites/FavoritesScreen";
import { CategoriesScreen } from "../screens/categories/CategoriesScreen";

const Stack = createNativeStackNavigator();

export function SackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={{ title: "Menu" }}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ title: "Vejá oque encotramos" }}
            />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen
                name="CategoriesScreen"
                options={{ title: "Nome da categoria" }}
                component={CategoriesScreen}
            />
            <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
                name="CreateUserScreen"
                component={CreateUserScreen}
            />
        </Stack.Navigator>
    );
}
