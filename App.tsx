import React, {useEffect, useState} from 'react';
import {Platform, Text, View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import QrCodeMask from 'react-native-qrcode-mask';

import {PERMISSIONS, request} from 'react-native-permissions';

export const App = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [barcodes, setBarcodes] = useState('');

  // const {location} = useSelector(state => state.auth);
  console.log(barcodes, 'asmlkdsdkjlfdkljsdkjsfl');
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
    // if (location === undefined) {
    //   Geolocation.getCurrentPosition(
    //     position => {
    //       const {latitude, longitude} = position.coords;
    //       dispatch(addLocation({latitude, longitude}));
    //     },
    //     error => {
    //       alert.showCustomDialog(strings.dialogError, error.message);
    //     },
    //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    //   );
    // }
    return () => {};
  }, []);

  // useEffect(() => {
  //   status?.productsQrProcess === 'success'
  //     ? alert.showCustomDialog(strings.dialogInfo, message?.productsQrProcess, [
  //         {
  //           text: strings.ok,
  //           onPress: () => {
  //             navigation.goBack();
  //             dispatch(setScanned(false));
  //             dispatch(resetQr());
  //           },
  //         },
  //       ])
  //     : status?.productsQrProcess === 'error'
  //     ? alert.showCustomDialog(
  //         strings.dialogError,
  //         message?.productsQrProcess,
  //         [
  //           {
  //             text: strings.ok,
  //             onPress: () => {
  //               navigation.goBack();
  //               dispatch(resetQr());
  //               dispatch(setScanned(false));
  //             },
  //           },
  //         ],
  //       )
  //     : null;
  // }, [status?.productsQrProcess]);

  // useEffect(() => {
  //   check();
  // }, [barcodes]);

  // const check = () => {
  //   if (barcodes.length > 0 && !scanned) {
  //     dispatch(setScanned(true));
  //     const qr = barcodes;
  //     if (qr !== '') {
  //       dispatch(productsQrProcess({qr}));
  //       return null;
  //     }
  //   } else {
  //     dispatch(setScanned(false));
  //   }
  // };

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
              edgeColor="red"
              topTitle="Qr Code Scanner"
              bottomTitle="Put the Qr into the box"
            />
          </>
        ) : (
          <Text>Camera Loading</Text>
        )}
      </View>
    </View>
  );
};
