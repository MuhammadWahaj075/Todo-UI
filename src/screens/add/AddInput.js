import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/button/Button';
import styles from './Style';

const AddInput = () => {
  return (
    <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
    
        <TextInput style={styles.input} placeholder="name" />
        <TextInput style={styles.input} placeholder="Description" />
        <Button
          styles={styles.btn}
          text="Add"
      
        />
    </View>
  );
};

export default AddInput;
