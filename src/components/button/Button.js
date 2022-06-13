import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Button = ({onPress, loading, styles, text}) => {
  return (
   
      <TouchableOpacity
        loading={loading}
        style={styles}
        onPress={onPress}>
        <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>
          {loading ? <ActivityIndicator size='large' color="#fff" /> : text}
        </Text>
      </TouchableOpacity>
  );
};

export default Button;
