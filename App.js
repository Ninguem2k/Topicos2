import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}
