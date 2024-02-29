import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import IMAGES from '../assets/Image';

const CustomDrawerHeader = ({height, showImage = true}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A4975',
        height: height || 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
      }}>
      <View></View>
      <View style={{justifyContent: 'center', marginLeft: 5}}>
        <TouchableOpacity>
          <Image style={{marginTop: 1}} source={IMAGES.drawer} />
        </TouchableOpacity>
      </View>

      {showImage && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30,
          }}>
          <Image
            source={IMAGES.logo}
            style={{width: '50%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

export default CustomDrawerHeader;
