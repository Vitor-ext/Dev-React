import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';


// Importar Telas para indenizar; 

const Stack = createStackNavigator();

export default() => (
    <Stack.Navigator 
        initialRouteName="Home"  // Define a tela Inicial do APP
        screenOptions={{
            headershown: false // oculta o cabeçario
        }}
    >

        <Stack.Screen name="Home" component={Home}/>

    </Stack.Navigator>     
);