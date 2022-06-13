import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import profImage from '../../assets/cat.jpg';
import Options from '../../components/options/Options';
import styles from './Style';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="pencil" size={30} color="#6D62E2" />
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Image source={profImage} style={styles.profImg} />
          <Text style={styles.name}>Jane Kolinz</Text>
        </View>
        <Options style={styles.text} text="Full Name" styles={styles.fname} />
        <Options style={styles.text} text="Gender" styles={styles.gender} />
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 26,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Join us in social media
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.fbIcon}>
            <Icon
              name="facebook"
              size={50}
              color="#6D62E2"
              style={styles.dots}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbIcon}>
            <Icon
              name="instagram"
              size={50}
              color="#6D62E2"
              style={styles.dots}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbIcon}>
            <Icon
              name="twitter"
              size={50}
              color="#6D62E2"
              style={styles.dots}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
