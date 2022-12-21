import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Easing,
  Alert,
  Animated,
} from 'react-native';
import styles from "./styles";
import React, { useState } from 'react';
import useRef from 'react';
import { useNavigation } from '@react-navigation/native';
import Api from '../../api';
import SignInput from '../../components/SignInput';
import Aviao from '../../../src/assets/Aviao.png'; 


export default function App() {

  const navigation = useNavigation();

  const [valor1Field, setvalor1Field] = useState('1,00');
  const [valor2Field, setvalor2Field] = useState('1,00');

  const [startValueY] = useState(() => new Animated.Value(0));

  const moveImageY = () => {
    startValueY.setValue(130);

    Animated.timing(startValueY, {
      toValue: 5,
      duration: 5000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
    return moveImageY;
  };

  const Aposta1 = (req) => {
    Api.post("Definir URL do BACK", {
      //Analisar after
    })
      .then((response) => {
        console.log(response.data);
        // Analisar o que faremos após coletar o resultado
      })
      .catch((e) => {
        Alert.alert('Erro', 'Impossivel apostar nesta rodada')
        console.log(e);
      });
  };

  const Aposta2 = (req) => {
    Api.post("Definir URL do BACK", {
      //Analisar after
    })
      .then((response) => {
        console.log(response.data);
        // Analisar o que faremos após coletar o resultado
      })
      .catch((e) => {
        Alert.alert('Erro', 'Impossivel apostar nesta rodada')
        console.log(e);
      });
  };


  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.Text}>Faça suas apostas!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.Image} >
        <Animated.Image
          style={{
            width: 80,
            height: 40,
            transform: [{translateY: startValueY,}],
          }}
          source={require('../../assets/Aviao.png')}
        />
      </View>

      <View style={styles.InputArea} >
        <SignInput
          placeholder="0,00"
          value={valor1Field}
          onChangeText={t => setvalor1Field(t)}
        />
      </View>

      <TouchableOpacity
        style={styles.btaposta}
        onPress={Aposta1}
      >
        <Text>APOSTAR</Text>
      </TouchableOpacity>

      <View style={styles.InputArea} >

        <SignInput
          placeholder="0,00"
          value={valor2Field}
          onChangeText={t => setvalor2Field(t)}
        />
      </View>

      <TouchableOpacity
        style={styles.btaposta}
        onPress={Aposta2}
      >
        <Text>APOSTAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btaposta}
        onPress={moveImageY}
      >
        <Text>Inicio</Text>
      </TouchableOpacity>

    </View>
  );
};