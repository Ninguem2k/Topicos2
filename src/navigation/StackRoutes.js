import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddItemScreen } from "../screens/addItem/AddItemScreen";
import { CategoriesScreen } from "../screens/categories/CategoriesScreen";
import { ConfigScreen } from "../screens/config/ConfigScreen";
import { CreateUserScreen } from "../screens/createUser/CreateUserScreen";
import { DetailsScreen } from "../screens/details/DetailsScreen";
import { FavoritesScreen } from "../screens/favorites/FavoritesScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { LoginScreen } from "../screens/login/LoginScreen";
import { MenuScreen } from "../screens/menu/MenuScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { SearchScreen } from "../screens/search/SearchScreen";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={{
                    title: "Menu",
                }}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    title: "See what we found",
                }}
            />
            <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{
                    tabBarStyle: { display: 'none' }, 
                }}
            />
            <Stack.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
            />
            <Stack.Screen
                name="ConfigScreen"
                component={ConfigScreen}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    title: "User Profile",
                }}
            />
            <Stack.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
                options={{
                    title: "Category Name",
                }}
            />
            <Stack.Screen
                name="AddItemScreen"
                component={AddItemScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="CreateUserScreen"
                component={CreateUserScreen}
            />
        </Stack.Navigator>
    );
}

