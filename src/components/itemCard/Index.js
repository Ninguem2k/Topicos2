import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Styles from "./Style";
import React from "react";

const ItemCard = ({ item }) => {
    return (
        <View style={Styles.container}>
            <Image source={{ uri: item.images[0] }} style={Styles.cover} />

            <View style={Styles.info}>
                <Text style={Styles.title}>{item.title}</Text>
                <View style={Styles.description}>
                    <Text style={Styles.price}>R$ {item.price} </Text>
                    {[...Array(5)].map((_, i) => (
                        <Feather
                            key={i}
                            name="star"
                            size={12}
                            color={
                                i < Math.floor(item.rating) ? "#FFD700" : "#CCC"
                            }
                        />
                    ))}
                </View>
            </View>

            <LinearGradient
                colors={[
                    "transparent",
                    "rgba(0,0,0, 0.70)",
                    "rgba(0,0,0, 0.95)",
                ]}
                style={Styles.gradient}
            />
        </View>
    );
};

export default ItemCard;
