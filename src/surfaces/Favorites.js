import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListOfFavorites } from "../components/ListOfFavorites";

const Favorites = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <ListOfFavorites />
    </SafeAreaView>
  );
};

export default Favorites;