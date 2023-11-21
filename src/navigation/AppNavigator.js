import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { SearchScreen } from "../screens/search/SearchScreen";
import { MenuScreen } from "../screens/menu/MenuScreen";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator screenOptions={screenOptions} >
            {renderTab("HomeTab", StackRoutes, "home")}
            {renderTab("SearchTab", SearchScreen, "search")}
            {renderTab("MenuTab", MenuScreen, "people")}
        </Tab.Navigator>
    );
}

const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#121212",
    tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 0,
    },
};

function renderTab(name, component, icon) {
    return (
        <Tab.Screen
            name={name}
            component={component}
            options={() => ({
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                        name={focused ? icon : icon + "-outline"}
                        color={focused ? "#7e64ff" : color}
                        size={size}
                    />
                ),
                tabBarShowLabel: false,
            })}
        />
    );
}

