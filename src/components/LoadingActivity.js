import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native';

function LoadingActivity({text}) {
    return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>{text}</Text>
        </View>
      );
}

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

export default LoadingActivity
