import {View, Text} from 'react-native'

export default Loading = ({message}) => {
    return (
            <View>
              <Text>{message} ...</Text>
            </View>
    )
}