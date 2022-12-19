import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/mainstack';;

export default () => {
    return(
        <NavigationContainer>
            {
              <MainStack/>
            }
        </NavigationContainer>
    );
}

