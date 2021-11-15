import React from 'react';
import {StyleSheet, View, Modal, Image, ActivityIndicator} from 'react-native';

function LoadingScreen({show}) {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={show}
      style={{zIndex: 1100}}
      onRequestClose={() => {}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}>
        <View
          style={{
            // backgroundColor: '#FFFFFF',
            height: 200,
            width: 100,
            borderRadius: 10,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <ActivityIndicator animating={show} size={50} thickness={1.5} />
        </View>
      </View>
    </Modal>
  );
}

export default LoadingScreen;
