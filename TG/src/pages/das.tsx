import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, SafeAreaView,FlatList} from 'react-native';

import { CardDas } from "../components/CardDas";
import { DasStatus } from "../components/DasStatus";

import api from "../services/api";
import colors from "../styles/colors";

interface DasTelaProps {
  navigation: any;
}
interface DasProps{
  id: string;
  title: string;
  status: string;
  subtitle: string;
}

interface DasStatusProps{
  id: string;
  title: string;
  status: string; 
}

const DAS = (props: DasTelaProps) => {

  const dastela = () => props.navigation.navigate('DasDetalhes')

  const [das, setDas] = useState<DasProps[]>([]);
  const [statusDas, setStatusDas] = useState<DasStatusProps[]>([]);

  useEffect(() => {
    async function fetchDas(){
      const {data} = await api.get('das');
      setDas(data);
    }
    fetchDas();
  },[])

  useEffect(() => {
    async function fetchStatusDas(){
      const {data} = await api.get('status');
      setStatusDas(data);
    }
    fetchStatusDas();
  },[])

  return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.name}>
            Ana Clara Graciano
        </Text>
        <View style={styles.background}>
            <FlatList 
              data={statusDas}
              renderItem={({item}) => (
                <DasStatus data={item}/>
              )}
              horizontal
            />
            <Text style={styles.title}>
                DAS
            </Text>
            <View >
            </View>
            <FlatList 
            data={das}
            renderItem={({item}) => (
              <CardDas data={item} onPress={dastela}/>
            )}
          />
        </View>
    </SafeAreaView>
    
)
}

export default DAS;

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