import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, SafeAreaView,FlatList} from 'react-native';

import { CardDas } from "../components/CardDas";
import { DasStatus } from "../components/DasStatus";

import api from "../services/api";
import colors from "../styles/colors";

interface DasDetalhesProps {
    navigation: any;
}

const DasDetalhes = (props: DasDetalhesProps) =>  {

  return(
    <SafeAreaView style={styles.container}>
        
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
   name: {
    fontSize:25,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 30
 },
    title:{
      fontSize:25,
      color: colors.blue_dark,
      fontWeight: 'bold',
      marginTop: 30,
      paddingHorizontal: 20,
      alignItems: 'center'
   },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.blue_dark,
        marginTop:10
    },
    optionsList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 20,
        marginVertical: 32
    }
});