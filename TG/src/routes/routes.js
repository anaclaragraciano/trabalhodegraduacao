import React from "react"; 

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "../pages/welcome";
import UserIdentification from "../pages/useridentification";
import { Confirmation } from "../pages/confirmation";

const Routes = ( ) => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen  
                    options={{headerShown:false}} 
                    name="Welcome" 
                    component={Welcome} 
                />
                <Stack.Screen  
                    options={{headerShown:false}} 
                    name="UserIdentification" 
                    component={UserIdentification} 
                />
                 <Stack.Screen  
                    options={{headerShown:false}} 
                    name="Confirmation" 
                    component={Confirmation} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
