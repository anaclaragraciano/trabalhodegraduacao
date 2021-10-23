import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/home";
import Insert from "../pages/insert";
import DAS from "../pages/das";
import Profile from "../pages/profile";
import Transitions from "../pages/transitions";
import colors from "../styles/colors";
const Tab = createBottomTabNavigator();

export default function MyTabs(){
  return(
    <Tab.Navigator
    tabBarOptions={{
      style:{
        backgroundColor:colors.back
      }
    }}
    >
            <Tab.Screen  
                options={{headerShown:false}} 
                name="Principal" 
                component={Home} 
            />
            <Tab.Screen  
                options={{headerShown:false}} 
                name="Transações " 
                component={Transitions} 
            />
            <Tab.Screen  
                options={{headerShown:false}} 
                name="Insert" 
                component={Insert} 
            />
            <Tab.Screen  
                options={{headerShown:false}} 
                name="Meu DAS" 
                component={DAS} 
            />
            <Tab.Screen  
                options={{headerShown:false}} 
                name="Perfil" 
                component={Profile} 
            />

    </Tab.Navigator>
  )
}