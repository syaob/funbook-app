import React from 'react'
import { View, Image, Text } from "react-native";
import {FlatList} from "react-native-gesture-handler"


export default function ListOfCards() {
    const renderItem = ({ item }) => {
        return (
            <Image
              style={{
                width: "100%",
                height: 288,
                borderRadius: 20,
                marginBottom: 32,
              }}
              source={{
                uri: item.url,
              }}
            />
        );
      };

      const arrayOfImages =[
        {
          "itemId": 101,
          "authorId": 11,
          "timeStamp": "2 hrs ago",
          "url": "https://images.unsplash.com/photo-1653546226145-91aa8ce0cc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
          "likes": "28",
          "conversations": "12"
        },
        {
          "itemId": 102,
          "authorId": 7,
          "timeStamp": "1 week ago",
          "url": "https://images.unsplash.com/photo-1652906233485-74fe784931e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          "likes": "8",
          "conversations": "123"
        },
        {
          "itemId": 103,
          "authorId": 9,
          "timeStamp": "1 week ago",
          "url": "https://images.unsplash.com/photo-1653629154029-265d18f0e1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
          "likes": "92",
          "conversations": "3"
        },
        {
          "itemId": 104,
          "authorId": 2,
          "timeStamp": "1 hr ago",
          "url": "https://images.unsplash.com/photo-1654512799227-94e56fbed599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
          "likes": "92",
          "conversations": "3"
        },
        {
          "itemId": 105,
          "authorId": 13,
          "timeStamp": "1 week ago",
          "url": "https://images.unsplash.com/photo-1654313188737-dc65639ee929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
          "likes": "9",
          "conversations": "3"
        },
        {
          "itemId": 106,
          "authorId": 1,
          "timeStamp": "30 mins ago",
          "url": "https://images.unsplash.com/photo-1654093618557-489b8f06d4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
          "likes": "92",
          "conversations": "3"
        },
        {
          "itemId": 107,
          "authorId": 10,
          "timeStamp": "2 weeks ago",
          "url": "https://images.unsplash.com/photo-1654455103120-e33ac58ab56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80",
          "likes": "122",
          "conversations": "36"
        },
        {
          "itemId": 108,
          "authorId": 6,
          "timeStamp": "5 hrs ago",
          "url": "https://images.unsplash.com/photo-1652099129299-ab40f28bd13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
          "likes": "79",
          "conversations": "16"
        }
      ]
  return (
    <View
      style={{
        marginTop: -200,
        paddingHorizontal: 20,
        marginBottom: 160,
      }}
    >
        <FlatList 
            data={arrayOfImages}
            renderItem={renderItem}
            keyExtractor={(item) => item.itemId}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}
