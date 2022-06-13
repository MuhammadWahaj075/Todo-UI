import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/button/Button';
import profImage from '../../assets/cat.jpg'
import styles from './Style';

const EditProfile = ({navigation}) => {
  return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
     
        <View style={styles.wrapper}>
          <Image source={profImage} style={styles.profImg} />
          <Text style={styles.name}>Jane Kolinz</Text>
        </View>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Gender" />

        <Button
          styles={{
            backgroundColor: '#6055E0',
            marginTop: '30%',
            borderRadius: 25,
            width: '70%',
            alignSelf: 'center',
            height: 50,
            justifyContent: 'center',
          }}
          text="Save"
          onPress={() => navigation.navigate('Profile') }
        />
        </View>
        </KeyboardAwareScrollView>
  );
};

export default EditProfile;
