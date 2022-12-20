import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
  CustomButton, 
  CustomButtonText } from 'react-native';
import Erro from '../../assets/erro.png';
import error from '../../assets/error.png';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from "react";
import LoadingIcons from 'react-loading-icons';
import LottieView from 'lottie-react-native';
import SignIn from '../SignIn/SignIn';


export default () => {

  const navigation = useNavigation();     // Variavel para nevegação entre telas

  
           
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerA: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

}); 

const timer = setTimeout (()=> {
  navigation.reset({
    routes: [{name: 'SignIn'}]   
  });
}, 3000);

return (

  <View style={styles.container}>
    <Image source={error} style={{width: 200, height: 100}} resizeMode="contain"/>
    <Image source= {Erro} style={{width: 2000, height: 300}} resizeMode="contain"/>
  </View>

//<Apploader style={{width: 50, height: 100}} resizeMode="contain"/>

);
}

