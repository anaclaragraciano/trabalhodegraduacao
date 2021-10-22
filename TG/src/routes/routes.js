import React from "react"; 

import { Welcome } from "../pages/welcome";

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Routes = ( ) => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
