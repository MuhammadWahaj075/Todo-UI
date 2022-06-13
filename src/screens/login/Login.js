import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Button from '../../components/button/Button';
import HeadText from '../../components/headingText/HeadText';
import MidText from '../../components/midTxt/Text';
import styles from './Style';

const Login = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <HeadText />
      <ScrollView>
        <View style={styles.form}>
          <MidText
            text="Enter mobile number and login"
            styletxt={{fontSize: 20, letterSpacing: 2, color: '#A2A2AD'}}
          />
          <TextInput keyboardType="numeric" style={styles.input} />
        </View>

        <Button
          onPress={() => navigation.navigate('Otp')}
          styles={{
            backgroundColor: '#F32424',
            marginTop: '30%',
            borderRadius: 25,
            width: '70%',
            alignSelf: 'center',
            height: 50,
            justifyContent: 'center',
          }}
          text="Next"
        />
      </ScrollView>
    </View>
  );
};

export default Login;
