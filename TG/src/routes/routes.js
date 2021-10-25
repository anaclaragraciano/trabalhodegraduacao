import React from "react"; 

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "../pages/welcome";
import UserIdentification from "../pages/useridentification";
import Confirmation from "../pages/confirmation";
import Information from "../pages/information";
import DasDetalhes from "../pages/dasDetalhes";
import MyTabs from "./tab";

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
                 <Stack.Screen  
                    options={{headerShown:false}} 
                    name="Tab" 
                    component={MyTabs} 
                />
                <Stack.Screen  
                    options={{headerShown:false}} 
                    name="Information" 
                    component={Information} 
                />
                <Stack.Screen  
                    options={{headerShown:false}} 
                    name="DasDetalhes" 
                    component={DasDetalhes} 
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
