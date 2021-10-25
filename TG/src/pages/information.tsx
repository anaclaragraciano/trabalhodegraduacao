import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import colors from "../styles/colors";

interface InformationProps {
    navigation: any;
}

const Information = (props: InformationProps) => {
  return(
      <SafeAreaView style={styles.container}>
          <View style={styles.background}>
            <Text style={styles.title}>
              Ocupações permitidas 
              para {'\n'} o MEI
            </Text>
            <Text style={styles.subtitle}>
              Veja as 480 atividades permitidas para se tornar um Microempreendedor Individual.
            </Text>

          </View>
      </SafeAreaView>
      
  )

}

export default Information;

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
      marginTop: 60,
      width: '100%'
   },
    title:{
      fontSize:25,
      color: colors.blue_dark,
      fontWeight: 'bold',
      marginTop: 30,
      paddingHorizontal: 20,
   },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.blue_dark,
        marginTop:10
    },
});