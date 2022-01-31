import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Video from 'react-native-video';
import video from '../../video/test.mp4';
import styles from './styles';
export default function Videoadapter(props) {
  const [post, setpost] = useState(props.post);
  console.log(post);
  const [paused, setcontrol] = useState(false);
  function controls() {
    setcontrol(!paused);
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={controls}>
        <Video
          source={{
            uri: post.videouri,
          }}
          style={{width: '100%', height: '50%'}}
          paused={paused}
          resizeMode={'cover'}
          repeat={true}
          style={styles.player}
        />
      </TouchableWithoutFeedback>
      <View style={styles.bottomcont}>
        <View style={styles.bottomUI}>
          <Text style={styles.handle}>@elon_musk</Text>
          <Entypo name={'heart'} size={30} color="white" style={styles.like} />
        </View>
      </View>
    </View>
  );
}
