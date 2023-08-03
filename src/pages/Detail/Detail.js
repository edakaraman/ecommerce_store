import { View, Text,Image } from "react-native";
import React from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Detail.style"

const Detail = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}> {data.title} </Text>
        <Text style={styles.desc}> {data.description} </Text>
        <Text style={styles.price}> ${data.price} </Text>
      </View>
    </View>
  );
};

export default Detail;
