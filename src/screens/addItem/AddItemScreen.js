import Styles from "./Style";

import React, { useState, useLayoutEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function AddItemScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");

    const handleSubmit = () => {};

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Cadastrar Serviço",
        });
    }, [navigation]);

    return (
        <View style={{ padding: 16 }}>
            <TextInput
                style={Styles.input}
                placeholder="Nome do Serviço"
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                multiline={true}
                numberOfLines={4}
                style={Styles.input}
                placeholder="Descrição do produto"
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <View style={Styles.inputRC2}>
                <TextInput
                    style={Styles.inputPrice}
                    placeholder="Desconto (%)"
                    keyboardType="numeric"
                    value={discount}
                    onChangeText={text => setDiscount(text)}
                />
                <TextInput
                    style={Styles.inputPrice}
                    placeholder="Preço (R$)"
                    keyboardType="numeric"
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
            </View>
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
