import React, {useState} from "react";
import styles from './styles';
import Aviao1 from '../../assets/Aviao1.png';
import { stylesheet,
        TouchableOpacity,
        Text,
        View,
        Image,
        Alert,
        CustomButton, 
        CustomButtonText } from 'react-native';
import SignInput from "../../components/SignInput";
import SignInputPassword from "../../components/SignInputPassword";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../../api'; 

export default () => {
  
    
    const [senhaField, setsenhaField] = useState ('');
    const [emailField, setemailField] = useState ('');

    const navigation = useNavigation ();

    const onPress = async () => {

    if (emailField === '' || senhaField === '') {   
        navigation.navigate("Erro");
        
    }else{
        navigation.navigate("Home");

    //    Api
    //       .post("/Login",{
    //         "email": emailField,
    //         "senha": senhaField
    //         })
    //             .then((response) => {
    //             navigation.navigate("Home",response.data);
    //         })
    //             .catch((e) => {
    //             Alert.alert('Erro', 'Usuário ou senha inválidos')
    //             console.log(e);
    //         });
    }
}

    const Click = () => {

        navigation.reset({
            routes: [{name: 'Home'}]
            
        });
    }

 
    return (
        
        <View style={styles.container}>

            <View style={styles.containerA}>
                <Text style={styles.Title}>LOGIN</Text>
                <Image source = {Aviao1} style = {styles.Image}/> 
            </View>
        
            <View style={styles.InputArea} >
                    
                <SignInput 
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setemailField(t)}
                />

                <SignInputPassword
                    placeholder="Senha"
                    value={senhaField}
                    onChangeText={t=>setsenhaField(t)}
                />

            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.Text}>Login</Text>
            </TouchableOpacity>

            
            <TouchableOpacity 
                onPress={Click} 
                style={styles.Button} 
            >

                <View style={styles.SignMessageButton}>
                    <Text style={styles.Text}>Don´t you have an account ?</Text>
                </View>

                <View style={styles.SignMessageButtonTextBold}>
                    <Text style={styles.Text}>Create new account !!!</Text>
                </View>

            </TouchableOpacity>



        </View>


    );

}