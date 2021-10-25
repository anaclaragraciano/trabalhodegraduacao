import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, SafeAreaView,Switch} from 'react-native';

import { Feather } from "@expo/vector-icons";

import api from "../services/api";
import colors from "../styles/colors";

interface DasDetalhesProps {
    navigation: any;
}

const DasDetalhes = (props: DasDetalhesProps) =>  {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.background}>
            <Feather name="chevron-left" size={60} color={colors.blue_dark}  />

            <View style={styles.content}>
                
                <View style={styles.body}>
                    <View style={styles.status}>
                        <Text style={styles.text}>
                            Atrasado
                        </Text>
                    </View>

                    <Text style={styles.title}>
                        Setembro 2021
                    </Text>

                    <Text style={styles.subtitle}>
                    Vencimento                               Valor
                    </Text>

                    <Text style={styles.info}>
                         22/10/21              R$60,00  
                    </Text>

                    <View style={styles.notification}>
                        <Text style={styles.not}>
                            Ativar lembrete?      
                        </Text> 
                        <Switch 
                            style={styles.note}
                            trackColor={{ false: colors.gray, true: colors.back }}
                            thumbColor={isEnabled ? colors.white: "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />                                      
                    </View>  

                    <View style={styles.pag}>
                        <Text style={styles.pay}>
                            Você já pagou?      
                        </Text> 
                        <Switch 
                            style={styles.on}
                            trackColor={{ false: colors.gray, true: colors.back }}
                            thumbColor={isEnabled ? colors.white: "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />                                      
                    </View>           
                </View>

            </View>


        </View>
        
    </SafeAreaView>
    
)
}

export default DasDetalhes;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors.back,
 },
    background: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      flex: 1,
      marginTop: 30,
      width: '100%'
   },
   content: {
        alignContent: "center",
        alignItems: 'center'
   },
   body: {
       borderColor: colors.blue_dark,
       borderRadius: 20,
       borderWidth: 2,
       width: "90%",
       height: "80%",
       alignContent: "center",
       alignItems: 'center',
       marginTop: 70
   },
   status:{
        borderColor: colors.back,
        borderRadius: 20,
        borderWidth: 2,
        width: 95,
        height: 32,
        alignContent: "center",
        alignItems: 'center',
        marginTop: 25
   },
   text:{
       color:colors.back,
       fontSize:20
   },
   title:{
       color:colors.blue_dark,
       fontSize: 30,
       marginTop: 20
   },
   subtitle:{
       color:colors.black,
       fontSize: 15,
       marginTop:30
   },
   info:{
       color: colors.blue_dark,
       fontSize: 30,
       marginTop: 10
   },
   notification:{
        borderColor: colors.blue_dark,
        borderRadius: 20,
        borderWidth: 2,
        width: "70%",
        height: 70,
        alignContent: "center",
        marginTop: 100,
        flexDirection: 'row'
   },
   not: {
        color: colors.blue_dark,
        fontSize: 22,
        margin: 15,
        textAlign: "left"
   },
   note: {
        margin: 12
   },
   pag:{
        borderColor: colors.blue_dark,
        borderRadius: 20,
        borderWidth: 2,
        width: "70%",
        height: 70,
        alignContent: "center",
        marginTop: 30,
        flexDirection: 'row'
   },
   on: {
       margin: 15
   },
   pay:{
        color: colors.blue_dark,
        fontSize: 22,
        margin: 15,
        textAlign: "left"
   }


});