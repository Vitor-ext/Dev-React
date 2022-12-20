import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import styles from "./styles";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Api from '../../api';
import SignInput from '../../components/SignInput';
import Aviao from '../../../src/assets/Aviao.png';


export default function App() {

  const navigation = useNavigation();

  const [valor1Field, setvalor1Field] = useState('1,00');
  const [valor2Field, setvalor2Field] = useState('1,00');

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
  }

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
  }


  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.Text}>Faça suas apostas!</Text>
        <StatusBar style="auto" />
      </View>

      <View >
        <Image source = {Aviao} style = {styles.Image}/>
        <StatusBar style="auto" />
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

    </View>
  );
}

