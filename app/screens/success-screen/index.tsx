import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {CheckTicketProcess} from '@services';
import {Logo} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

export const SuccessScreen = ({route}) => {
  const {qr} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(qr, 'dlfskdfldksflşsdqrrr');

  useEffect(() => {
    dispatch(CheckTicketProcess({qr}));
  }, []);

  const {data, message, status} = useSelector(
    (state: any) => state.checkTicket,
  );

  return (
    <View style={style.container}>
      <Text style={style.status}>{message.CheckTicketProcess}</Text>
      {status.CheckTicketProcess == 'success' && (
        <View style={style.innerContainer}>
          <Text style={style.title}>Bilet Sahibi</Text>
          <View style={style.nameContainer}>
            <Text style={style.info}>{data.CheckTicketProcess.name + ' '}</Text>
            <Text style={style.info}>{data.CheckTicketProcess.surname}</Text>
          </View>
          <Text style={style.title}>Etkinlik</Text>
          <Text style={style.info}>{data.CheckTicketProcess.event}</Text>
          <Text style={style.title}>BÖLÜM</Text>
          <Text style={style.info}>{data.CheckTicketProcess.area}</Text>
          <Text style={style.title}>KOLTUK</Text>
          <Text style={style.info}>{data.CheckTicketProcess.seat}</Text>
        </View>
      )}
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.navigate('home-screen');
        }}>
        <Text style={style.text}>Ana Sayfaya Dön</Text>
      </TouchableOpacity>
      <View style={style.logo}>
        <Logo />
      </View>
    </View>
  );
};
