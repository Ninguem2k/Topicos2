import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from "react-native";
import Styles from "./Style";

const sendWhatsappMessage = (phoneNumber, title) => {
  try {
    const message = `Olá, Gostaria de saber mais sobre ${title}, Eu encontrei ele no WorkWave!`;
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
  } catch (error) {
    console.error(error);
  }
};

const WhatsappButton = ({ phoneNumber, name }) => {
  return (
    <TouchableOpacity style={Styles.button} onPress={() => sendWhatsappMessage(phoneNumber, name)}>
      <View style={Styles.buttonContent}>
        <Text style={Styles.buttonText}>Contratar</Text>
        <View style={Styles.iconCart}>
          <Icon name="cart-outline" size={25} color="#6B4EFF" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WhatsappButton;
