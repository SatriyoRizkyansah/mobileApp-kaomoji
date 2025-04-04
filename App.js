import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ViewBase,
  StatusBar as RNStatusBar,
  StatusBar,
  FlatList,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const App = () => {
  const [dataKaomoji, setDataKaomoji] = useState([
    '⋆𐙚₊˚⊹♡',
    '⋆౨ৎ˚⟡˖ ࣪',
    '૮ ˶ᵔ ᵕ ᵔ˶ ა',
    '꒰ᐢ. .ᐢ꒱₊˚⊹',
  ]);

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
          {/* <FontAwesome6 name="bars" size={25} color="white" />; */}
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

      <FlatList
        style={{marginTop: 20}}
        data={dataKaomoji}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 5,
              backgroundColor: '#272b35',
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff'}}>{item}</Text>
          </View>
        )}></FlatList>
    </View>
  );
};

export default App;
