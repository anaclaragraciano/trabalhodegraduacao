import React from "react";
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps} from 'react-native';
import colors from "../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
      title: string;
}

export function Button({title, ... rest}: ButtonProps) {
      return(
            <TouchableOpacity 
                  style={styles.container}
                  {... rest}
            >
                  <Text style={styles.text}>
                       { title }
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