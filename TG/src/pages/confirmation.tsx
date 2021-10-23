import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from "../components/Button";

import colors from "../styles/colors";

interface ConfirmationProps {
    navigation: any;
}

const Confirmation = (props: ConfirmationProps) => {
    const confimation = () => props.navigation.navigate('Tab')

      return(
            <SafeAreaView style={styles.container}>
                  <View style= {styles.content}>
                      <Text style={styles.emoji}>
                          😃
                      </Text>

                      <Text style={styles.title}>
                          Prontinho
                      </Text>

                      <Text style={styles.subtitle}>
                          Vamos começar a cuidar da sua empresa
                      </Text>

                        <View style={styles.footer}> 
                            <Button
                                title="Começar"
                                onPress={confimation}
                            />
                        </View>

                  </View>
            </SafeAreaView>
      )
}

export default Confirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize:22,
        color: colors.blue_dark,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.blue_dark,
        marginTop:10
    },
    emoji: {
        fontSize: 78
    },
    footer: {
        width: '100%',
        paddingHorizontal: 75,
        marginTop: 30
    }
});