import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Material from 'react-native-vector-icons/MaterialIcons';
const Options = ({
  text,
  styles,
  style,
  secondText,
  secondTxtStyle,
  icon,
  size,
  materialIcon, 
  msize,
}) => {
  return (
    <View style={{flex: 1}}>
      <View style={[{flexDirection: 'row', alignItems: 'center',}, styles]}>
        <Icon name={icon} size={size} color="#7B78BD" style={{marginLeft: 15}} />
        <View>
          <Text style={style}>{text}</Text>
          <Text style={secondTxtStyle}>{secondText}</Text>
        </View>
       
    
      <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10}}>
        <Material name={materialIcon} size={msize} color="#7E81D0" />
         </View> 
          </View> 
    </View>
  );
};

export default Options;
