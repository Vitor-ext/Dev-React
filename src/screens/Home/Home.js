import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from "./styles";
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation();


  return (
    <View styles={styles.container}>
      <Text>Vamos Jogar Xadrez!</Text>
      < Image source={tab_4} style={{width: 2000, height: 300}} resizeMode="contain"/>
      <StatusBar style="auto" />
    </View>
  );
}

