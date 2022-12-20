import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import SignIn from '../screens/SignIn/SignIn';
import Erro from '../screens/Erro/Erro';


// Importar Telas para indenizar; 

const Stack = createStackNavigator();

export default() => (
    <Stack.Navigator 
            initialRouteName="SignIn"  // Define a tela Inicial do APP
            screenOptions={{
            headerShown: false // oculta o cabeçario
        }}
    >

        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Erro" component={Erro}/>

    </Stack.Navigator>     
);