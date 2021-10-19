import React from "react";
import { TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from "../styles/colors";

export function Button() {
      return(
            <TouchableOpacity style={styles.container}>
                  <Text style={styles.text}>
                        Confirmar
                  </Text>
            </TouchableOpacity>
      )

}

const styles = StyleSheet.create({
    container: {
        borderColor: colors.blue_dark,
        borderWidth: 2,
        height: 56,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: colors.blue_dark
    }
});