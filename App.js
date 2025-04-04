import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ViewBase,
  StatusBar as RNStatusBar,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Clipboard from '@react-native-clipboard/clipboard';

const App = () => {
  const [dataKaomoji, setDataKaomoji] = useState([
    '⋆𐙚₊˚⊹♡',
    '⋆౨ৎ˚⟡˖ ࣪',
    '૮ ˶ᵔ ᵕ ᵔ˶ ა',
    '꒰ᐢ. .ᐢ꒱₊˚⊹',
  ]);

  const copyKaomoji = item => {
    Clipboard.setString(item);
  };

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
          {/* <Image
            source={require('./public/images/bars-svgrepo-com.svg')}
            imageStyle={{width: 25, height: 25}}
          /> */}
          <Text style={{color: '#fff', fontSize: 20}}>|||</Text>
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
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={{color: '#fff'}}>{item}</Text>
            </View>
            <TouchableOpacity onPress={copyKaomoji(item)}>
              <View
                style={{
                  backgroundColor: 'lightblue',
                  borderRadius: 8,
                  marginRight: 10,
                }}>
                <Text
                  style={{color: '#272b35', fontWeight: 'bold', padding: 5}}>
                  Copy
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}></FlatList>
    </View>
  );
};

export default App;
