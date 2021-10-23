import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { Button } from "../components/Button";

import colors from "../styles/colors";

interface UserIdentificationProps {
      navigation: any;
  }

const UserIdentification = (props: UserIdentificationProps) => {
      const useridentification = () => props.navigation.navigate('Confirmation')

      return(
        <SafeAreaView style={styles.container}>
                  <KeyboardAvoidingView 
                              style={styles.container}
                              behavior= {Platform.OS == 'ios' ? 'padding' : 'height'}
                  > 
                              <View style={styles.content}>
                                    <View style={styles.form}>
                                          <View style={styles.header}> 
                                                <Text style={styles.emoji}>
                                                      😃
                                                </Text>
                                                <Text style={styles.title}>
                                                      Como podemos {'\n'}
                                                      chamar você?
                                                </Text>
                                          </View>  
                                                <TextInput 
                                                            style={styles.input} 
                                                            placeholder="Digite seu nome"
                                                />
                                                <View style={styles.footer}>
                                                      <Button 
                                                            title="Confirmar"
                                                            onPress={useridentification}
                                                      />
                                                </View>                         
                                    </View>
                              </View>
                  </KeyboardAvoidingView>
        </SafeAreaView>
      )
}

export default UserIdentification;

const styles = StyleSheet.create({
      container: {
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: "space-around"
      },
      content: {
          flex: 1,
          width: '100%'
      },
      form: {
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 54,
          alignItems: 'center'
      },
      header: {
            alignItems: 'center'
      },
      emoji: {
          fontSize: 44,
      },
      input: {
          borderBottomWidth: 1,
          borderColor: colors.blue_dark,
          width: '100%',
          fontSize: 18,
          marginTop: 50,
          padding: 10,
          textAlign: 'center'
      },
      title: {
          fontSize: 24,
          lineHeight: 32,
          textAlign: 'center',
          color: colors.blue_dark,
          marginTop: 20
      },
      footer: {
            marginTop: 40,
            width: '100%',
            paddingHorizontal: 20
      }
});