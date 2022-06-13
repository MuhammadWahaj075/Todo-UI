import { View, Text } from 'react-native'
import React from 'react'

const MidText = ({text,styletxt }) => {
  return (
    <View>
    <Text style={styletxt}>
   {text}
  </Text>
    </View>
  )
}

export default MidText;