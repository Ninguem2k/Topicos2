import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SackRoutes } from "./StackRoutes";
import { SearchScreen } from "../screens/search/SearchScreen";
import { FavoritesScreen } from "../screens/favorites/FavoritesScreen";
import { MenuScreen } from "../screens/menu/MenuScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="HomeTab"
                component={SackRoutes}
                options={{
                    tabBarIcon: ({ color, size, focused }) =>
                        getTabBarIcon("home", color, size, focused),
                }}
            />

            <Tab.Screen
                name="SearchTab"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) =>
                        getTabBarIcon("search", color, size, focused),
                }}
            />

            {/* <Tab.Screen
                name="Ordered"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) =>
                        getTabBarIcon("cart", color, size, focused),
                }}
            /> */}

            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) =>
                        getTabBarIcon("menu", color, size, focused),
                }}
            />
        </Tab.Navigator>
    );
}

const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#121212",
    tabBarStyle: { backgroundColor: "#fff", borderTopWidth: 0 },
};

function getTabBarIcon(name, color, size, focused) {
    if (focused) {
        return <Ionicons name={name} color="#000" size={size} />;
    } else {
        return <Ionicons name={`${name}-outline`} color={color} size={size} />;
    }
}
