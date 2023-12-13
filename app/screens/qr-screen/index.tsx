import React, {useEffect, useState} from 'react';
import {Platform, Text, View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import QrCodeMask from 'react-native-qrcode-mask';

import {PERMISSIONS, request} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';

export const QrScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [barcodes, setBarcodes] = useState('');
  console.log(barcodes, 'aaaaaaaaaaa');

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA,
      ).then(result => {
        setHasPermission(result === 'granted');
      });
    })();

    return () => {};
  }, []);

  useEffect(() => {
    if (barcodes != '') {
      navigation.navigate('success-screen', {
        qr: barcodes,
      });
      setBarcodes('');
    }
  }, [barcodes, navigation]);

  const onSuccess = e => {
    setBarcodes(e?.data);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {hasPermission ? (
          <>
            <QRCodeScanner onRead={onSuccess} />
            <QrCodeMask
              // lineColor='green'
              lineDirection="vertical"
              height={250}
              edgeColor="#336CB3"
              bottomTitle="Qr kodu alanın içine yerleştirin"
            />
          </>
        ) : (
          <Text>Camera Loading</Text>
        )}
      </View>
    </View>
  );
};
