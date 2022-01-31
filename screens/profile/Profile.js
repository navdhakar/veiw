import React from 'react';
import {Text, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX/////37Vkl7GNSkNzPTf/26zbrJj/6Lz/3bBYg4f/+PCCODb/79xTjqrLs7GIPzeXbFpvODP/5sbk6/BTkbH/4KxsMi9lJifjuJ7BnIBEe4OFODD/47ftxqdoLSuKRD3q4eCCMijizqyNsMOpfXnmxKCOYVL/477XxcPu5+ajdHB6GQV3GBSwiXHPq4z/8+UycXv/69M/hKQ7LiNYAAACzElEQVR4nO3cXXMSMRSA4aLirgjKh0KFlVotS0tLW/r/f5y9EBJnMoSzZHPO6Pveb5JnuAlZwsUFERERERERERERqXb7KW+32YWbxeecLTbZhTdXb3N2dYMQIUKECBEizCX8cehuk1m4uXOTtyi8XxzKC3wluqnvWxReZ2aFu0aIEKF6CBEi1K9N4cNHCz0kVvW65aHCRm5B3V4KYdmxW4kQIUL1ECJEqF9yYXS3USVYdRWdpT1hUQ8jbc8nVtvYJLUjJhfORsebDovQokUVw2lkllmbwnfHGyURjiKzIESIECFChGaE01DLOoGwXgbHzi2cbr+Fekywa3sMjrydZhYuV0UV6mzgKzFUsVpmFyawSEKIECFChAjtCN1ZSXbhLPE5Te/QU/CsrV6l2L6cXrWqg2dtT26hMmDfe/HrzZP4ZFREDJ6XdrzXwX2Z0PJBd7gSIULzIURoP4QIj47t1fRQynvOH86G0B968jzf9ywhVt5zk/OX0aZw/mHfXCT0nkOIECFChAgRmhf+k3uaznrs+ukSjNDpeM95o60FI/DdAqH9ECK0H0KE9hMLmxx3aeQWKhP2+od22oaj7dxCG7/w/r9uBZkLIUKE+iFEiFA/hAgR6ocQIUL9ECJEeHLBa6EpLpxaEVaX70Ndnk9EiBAhQoQIESI8VRi+TqopTPw/wt6V4KYfZ2Jh2Wt6+TeeEWFqFkKECBEiRIjwrxpu4JIIva1ai0L3M7m+5CpE53s4yRBrb+4WhV5jyfLCB6aiEcZ5WI2F54cQIUKECBGaFOZ9NVzmF+7GsUR/vRIdbZddGK8rSXuxjUKI0H4IEdoPIUL7fZWkvdh9LwNBXyRJBn5pUTh4Y6EBQoQI1UOIEKF+CKVNfrm0bX/yVjSJA+JCGx9cuAFChAjVQ4gQoX4IESLUDyFChPohRIhQP4QIEeqHECFC/RAiRKjfCcLf8+te3SANjaEAAAAASUVORK5CYII=',
        }}
      />
      <Text style={styles.handle}>@elon_musk</Text>
      <View>
        <View style={styles.likes}>
          <Text style={{fontSize: 20}}>31.2M</Text>
          <Entypo name={'heart'} size={30} color="red" />
        </View>
      </View>
    </View>
  );
}
