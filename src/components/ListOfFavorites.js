import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { Card } from "../components/Card";
import { requestBase } from "../utils/constants";

export const ListOfFavorites = () => {
  const [cardList, setCardList] = useState(null);

  async function fetchCardData() {
    try {
      const response = await fetch(requestBase + "/home.json");
      const data = await response.json();
      setCardList(data);
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  if (!cardList) {
    // Display a loading spinner or custom loading view instead of AppLoading
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading favorites...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return <Card item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cardList.reverse()}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId.toString()} // Convert itemId to string to avoid key warnings
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = {
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
  },
};
