import { View, FlatList } from "react-native";
import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Products = ({ navigation }) => {
  const API_URL = "https://fakestoreapi.com/products";
  const { loading, data, error } = useFetch(API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
      <FlatList  data={data} renderItem={renderProduct} />
  );
};

export default Products;
