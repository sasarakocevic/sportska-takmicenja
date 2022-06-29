import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://cdn.pixabay.com/photo/2014/04/02/16/17/ball-306820_960_720.png' />

      <View style={styles.user}>
        <Text style={styles.greeting}>
          Sportska
        </Text>

        <Text style={styles.username}>
          Takmicenja
        </Text>
      </View>
    </View>
  )
}
