import React from "react";
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps} from 'react-native';
import colors from "../styles/colors";

interface ContainerProps extends TouchableOpacityProps {
      title: string;
}

export function Container({title, ... rest}: ContainerProps) {
      return(
            <TouchableOpacity 
                  style={styles.container}
                  {... rest}
            >
                  <Text style={styles.text}>
                       { title }
                  </Text>
                  <Text style={styles.body}>
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
        justifyContent: 'center',
        width: 30
    },
    text: {
        fontSize: 20,
        color: colors.black
    },
    body: {
        fontSize: 16,
        color: colors.black

    }
});