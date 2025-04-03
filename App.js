import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ViewBase,
  StatusBar as RNStatusBar,
  StatusBar,
} from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#21252b',
        paddingTop: 50,
      }}>
      <StatusBar backgroundColor={'#282c34'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: '#282c34',
          paddingVertical: 12,
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <FontAwesome6 name="bars" size={20} color="#fff " />;
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              elevation: 3,
            }}>
            Kaomoji App
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
