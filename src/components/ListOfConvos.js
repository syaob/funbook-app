import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { ConversationItem } from "./ConversationItem";
import { requestBase } from "../utils/constants";
import LoadingActivity from "./LoadingActivity";

export const ListOfConvos = ({ navigation }) => {
  const [conversationsList, setConversationsList] = useState(null);

  async function fetchConversationData() {
    const response = await fetch(requestBase + "/conversations.json");
    setConversationsList(await response.json());
  }

  useEffect(() => {
    fetchConversationData();
  }, []);

if (!conversationsList) {
    // Display a loading spinner or custom loading view instead of AppLoading
    <LoadingActivity text="Loading conversation item..." />
  }

  const renderItem = ({ item }) => {
    return <ConversationItem navigation={navigation} item={item} />;
  };
  
  return (
    <View
      style={{
        paddingTop: 30,
        marginTop: -30,
        marginBottom: 50,
      }}
    >
      <FlatList
        data={conversationsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate='fast'
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
};