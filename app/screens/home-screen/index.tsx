import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../assets/icons';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.navigate('qr-screen');
        }}>
        <Text style={style.text}>Qr kod sorgula</Text>
      </TouchableOpacity>
      <View style={style.logo}>
        <Logo />
      </View>
    </View>
  );
};
