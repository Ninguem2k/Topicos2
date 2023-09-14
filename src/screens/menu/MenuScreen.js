import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardUser from "../../components/cardUser/Index";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import Styles from "./Style";

export const MenuScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            try {
                const responseUser = await api.get("/users?id=" + 2);
                setUser(responseUser.data[0]);
            } catch (error) {
                console.error("Error fetching User:", error);
            }
        }

        fetchUser();
    }, [2]);

    const handleLogout = () => {};

    const handleSettings = () => {};

    const handleFavorite = () => {};

    const handleLogin = () => {
        navigation.navigate("LoginScreen");
    };

    const handleRegister = () => {
        navigation.navigate("CreateUserScreen");
    };
    const handleAddItem = () => {
        navigation.navigate("AddItemScreen");
    };

    
  return (
    <View style={Styles.container}>
      {!user ? (
        <View style={Styles.login}>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={Styles.buttonTextLogin}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={Styles.buttonTextLogin}>Logar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity >
          <CardUser user={user} />
        </TouchableOpacity>
      )}
      <View style={Styles.cardButtons}>
        <TouchableOpacity onPress={handleFavorite} style={Styles.button}>
          <Feather name="heart" size={24} color="#000" />
          <Text style={Styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings} style={Styles.button}>
          <Feather name="settings" size={24} color="#000" />
          <Text style={Styles.buttonText}>Configuração</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddItem} style={Styles.button}>
          <Feather name="book" size={24} color="#000" />
          <Text style={Styles.buttonText}>Cadastrar um serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={Styles.button}>
          <Feather name="log-out" size={24} color="#000" />
          <Text style={Styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

