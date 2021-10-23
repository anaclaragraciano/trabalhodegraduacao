import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { Button } from "../components/Button";
import { Container } from "../components/container"; 
import colors from "../styles/colors";

interface HomeProps {
      navigation: any;
  }

const Home = (props: HomeProps) => {
      const home = () => props.navigation.navigate('Information')

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
                    <Container 
                        title="Ocupações permitidas para o MEI"
                        onPress={home}
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
        marginTop: 60,
        width: '100%',
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
        marginTop: 30,
        marginLeft: 40
     },
     footer:{
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 15
     }
});