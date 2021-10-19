import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';

import empreendedorImg from '../assets/empreendedor.png';
import colors from "../styles/colors";
import {Entypo} from '@expo/vector-icons'
export function Welcome(){
        return(
            <SafeAreaView style = { styles.container }> 
                <Text style = {styles.title}>
                    Gerencie a sua {'\n'}
                   empresa de forma fácil
                </Text>

                <Image 
                    source={empreendedorImg}  
                    style = {styles.image} 
                    resizeMode="contain"
                />

                <Text style = {styles.subtitle}>
                    Não esqueça mais de pagar sua DAS ou emitir as notas fiscais do mês.
                    Nós cuidados de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttontext}>
                            <Entypo name="chevron-right" style={styles.buttonicon} />
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
            
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.blue_dark,
        marginTop: 50
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.blue_dark,
    },
    image: {
        height: Dimensions.get('window').width*1
    },
    button: {
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonicon: {
        fontSize: 24,
        color: colors.white
    }
  })