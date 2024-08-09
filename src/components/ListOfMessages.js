import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { requestBase } from "../utils/constants";
import LoadingActivity from "./LoadingActivity";

export const ListOfMessages = ({ conversationId }) => {
  
  const [messages, setMessages] = useState(null);

  async function fetchMessages() {
    const response = await fetch(
      requestBase + "/messages/" + conversationId + ".json"
    );
    const res = await response.json();
    
    setMessages(res);
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  if (!messages || messages === null) {
    return <LoadingActivity text="Loading messages..." />
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.text,
          item.type === "from" ? styles.textTo : styles.textFrom,
        ]}
      >
        <Text style={{}}>{item.text}</Text>
      </View>
    );
  };
  
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
        <Text>Liste of messages</Text>
       <FlatList
        data={messages.messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        inverted
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#FAFAFA",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    fontSize: 14,
    padding: 10,
    maxWidth: "65%",
    marginVertical: 14,
  },
  textFrom: {
    borderTopLeftRadius: 20,
    alignSelf: "flex-end",
  },
  textTo: {
    borderTopRightRadius: 20,
    alignSelf: "flex-start",
  },
});