import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./ProductCard.style";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = ({ product, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.body_container}>
          <Text style={styles.title}> {product.title} </Text>
          <View style={styles.category_container}>
            <Text style={styles.category}> {product.category} </Text>
          </View>
          <View style={styles.icon_container}>
            <AntDesign style={styles.icon} name="star" size={17} color="#E7B10A" />
            <Text style={styles.rate}> {product.rating.rate} </Text>
          </View>
          <Text style={styles.price}> ${product.price} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
