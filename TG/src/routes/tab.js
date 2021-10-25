import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

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
                name="Principal" 
                component={Home} 
                options={{
                  tabBarIcon: ({ size, color}) => (
                    <Feather name="home" size={size} color={color} />
                  ),
                  headerShown:false
                }}
            />
            <Tab.Screen  
                name="Transações " 
                component={Transitions} 
                options={{
                  tabBarIcon: ({ size, color}) => (
                    <Feather name="dollar-sign" size={size} color={color} />
                  ),
                  headerShown:false
                }}
            />
            <Tab.Screen  
                name="Insert" 
                component={Insert} 
                options={{
                  tabBarLabel: '',
                  tabBarIcon: ({ size, color}) => (
                    <Feather name="plus-circle" size={size} color={color}/>
                  ),
                  headerShown:false
                }}
            />
            <Tab.Screen  
                name="Meu DAS" 
                component={DAS} 
                options={{
                  tabBarIcon: ({ size, color}) => (
                    <Feather name="file" size={size} color={color} />
                  ),
                  headerShown:false
                }}
            />
            <Tab.Screen  
                name="Perfil" 
                component={Profile} 
                options={{
                  tabBarIcon: ({ size, color}) => (
                    <Feather name="user" size={size} color={color} />
                  ),
                  headerShown:false
                }}
            />

    </Tab.Navigator>
  )
}