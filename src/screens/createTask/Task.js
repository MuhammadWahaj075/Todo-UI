import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {FAB} from 'react-native-paper';
import Options from '../../components/options/Options';
import styles from './Style';

const Task = () => {
  const list = [
    {
      name: 'Idea',
      description: '14 on this week',
      icon: (
        <Options
        icon="lightbulb"
        size={50}
        secondText="13 on this week"
        secondTxtStyle={{marginLeft: 40}}
        style={{marginLeft: 40, fontWeight: 'bold', fontSize: 25}}
        text="Idea"
        styles={{
          backgroundColor: '#F2F2F2',
          width: '90%',
          alignSelf: 'center',
          height: 90,
          borderRadius: 20,
          elevation: 2,
        }}
        materialIcon="arrow-forward-ios"
        msize={20}
      />
      ),
    },
    {
      name: 'Food',
      description: '14 on this week',
      icon: (
        <Options
          icon="social-apple"
          size={50}
          secondText="13 on this week"
          secondTxtStyle={{marginLeft: 40}}
          style={{marginLeft: 40, fontWeight: 'bold', fontSize: 25}}
          text="Food"
          styles={{
            backgroundColor: '#F2F2F2',
            width: '90%',
            alignSelf: 'center',
            height: 90,
            borderRadius: 20,
            elevation: 2,
          }}
          materialIcon="arrow-forward-ios"
          msize={20}
        />
      ),
    },
    {
      name: 'Work',
      description: '14 on this week',
      icon: (
        <Options
          icon="torsos-all-female"
          size={50}
          secondText="13 on this week"
          secondTxtStyle={{marginLeft: 40}}
          style={{marginLeft: 40, fontWeight: 'bold', fontSize: 25}}
          text="Work"
          styles={{
            backgroundColor: '#F2F2F2',
            width: '90%',
            alignSelf: 'center',
            height: 90,
            borderRadius: 20,
            elevation: 2,
          }}
          materialIcon="arrow-forward-ios"
          msize={20}
        />
      ),
    },
    {
      name: 'Sport',
      description: '14 on this week',
      icon: (
        <Options
          icon="target-two"
          size={50}
          secondText="13 on this week"
          secondTxtStyle={{marginLeft: 40}}
          style={{marginLeft: 40, fontWeight: 'bold', fontSize: 25}}
          text="Sport"
          styles={{
            backgroundColor: '#F2F2F2',
            width: '90%',
            alignSelf: 'center',
            height: 90,
            borderRadius: 20,
            elevation: 2,
          }}
          materialIcon="arrow-forward-ios"
          msize={20}
        />
      ),
    },

    {
      name: 'Music',
      description: '14 on this week',
      icon: (
        <Options
          icon="target-two"
          size={50}
          secondText="13 on this week"
          secondTxtStyle={{marginLeft: 40}}
          style={{marginLeft: 40, fontWeight: 'bold', fontSize: 25}}
          text="Music"
          styles={{
            backgroundColor: '#F2F2F2',
            width: '90%',
            alignSelf: 'center',
            height: 90,
            borderRadius: 20,
            elevation: 2,
          }}
          materialIcon="arrow-forward-ios"
          msize={20}
        />
      ),
    },
  ];

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingtxt}>Choose Activity</Text>
      {list.map((data, key) => {
        console.log(data);
        return(
          <TouchableOpacity key={key} style={{marginTop: 20}}>
          {data.icon}
        </TouchableOpacity>
        )
    
      })}
        

        <FAB
          style={{
            backgroundColor: '#4142CB',
            borderRadius: 15,
            justifyContent: 'flex-end',
            marginRight: 20,
            alignSelf: 'flex-end',
            marginTop: 5,
          }}
          larger
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </View>
    </ScrollView>
  );
};

export default Task;
