import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// import * as Clipboard from 'expo-clipboard';

import HeadText from '../../components/headingText/HeadText';
import MidText from '../../components/midTxt/Text';
import styles from './Style';
import Button from '../../components/button/Button';

const Otp = ({navigation}) => {
  const [isLoading, setisLoading] = React.useState(false);

  const handleChange = () => {
    setisLoading(isLoading);
    navigation.navigate('Login');
    setTimeout(() => {
      setisLoading(!isLoading);
    }, 1000);
  };

  return (
    <View style={styles.Container}>
      <HeadText />
      <View style={styles.otp}>
        <MidText
          text="We sent OTP code to verify your"
          styletxt={{
            fontSize: 25,
            letterSpacing: 1,
            color: '#A2A2AD',
            fontWeight: 'bold',
          }}
        />
        <MidText
          text="number"
          styletxt={{
            fontSize: 25,
            letterSpacing: 1,
            color: '#A2A2AD',
            fontWeight: 'bold',
          }}
        />
      </View>
      <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={4}
        keyboardType={'phone-pad'}
        keyboardAppearance={'dark'}
        placeholderCharacter="9"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />

      <Button
        onPress={handleChange}
        loading={isLoading}
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
    </View>
  );
};

export default Otp;
