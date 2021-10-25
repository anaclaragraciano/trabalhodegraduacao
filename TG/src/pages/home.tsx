import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { FlatList } from "react-native-gesture-handler";


import api from "../services/api";
import colors from "../styles/colors";
import {Card} from "../components/Card";
interface HomeProps {
      navigation: any;
  }

interface InformationProps{
    id: string;
    name: string;
    subtitle: string;
    about: string;
}

const Home = (props: HomeProps) => {
        const home = () => props.navigation.navigate('Information')
        const [information, setInformation] = useState<InformationProps[]>([]);
        
        useEffect(() => {
            async function fetchInformation(){
                const { data } = await api.get('informations');
                setInformation(data);
            }

            fetchInformation();

        },[ ])

        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.name}>
                    Ana Clara Graciano
                </Text>
                <Text style={styles.cnpj}>
                    42.807.427/0001-46
                </Text>
                <View style={styles.background}>
                    <Text style={styles.title}>
                        Informações
                    </Text>
                    <View style={styles.footer}>
                        <FlatList
                            data={information}
                            renderItem={({ item }) => (
                                <Card data={item} />
                            )}
                            showsVerticalScrollIndicator={false}                        
                        />
                    </View>
                </View>
            </SafeAreaView>
            
        )

}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.back
     },
     background: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        flex: 1,
        marginTop: 20,
        width: '100%'
     },
     name: {
        fontSize:25,
        color: colors.white,
        fontWeight: 'bold',
        marginTop: 30
     },
     cnpj: {
        fontSize:20,
        color: colors.white,
        marginTop: 5
     },
     title:{
        fontSize:25,
        color: colors.blue_dark,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 40
     },
     footer:{
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 15,
        flex: 1,
        justifyContent: 'center'
     },
     subtitle: {
        fontSize: 16,
        color: colors.black
     }
});