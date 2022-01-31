import React, {useEffect, useState} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import posts from './fakedata';
import Videoadapter from '../../components/feed/Videoadapter';
export default function Feed() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Videoadapter post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
}
