import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  player: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  bottomcont: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomUI: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 80,
  },
  handle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default styles;
