import React from "react";
import { StyleSheet, Text} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from "../styles/colors";

interface CardProps extends RectButtonProps {
      data: {
            name: string;
            subtitle: string;
      }
}

export const Card = ({data, ...rest} : CardProps ) => {
      return(
            <RectButton 
                  style={styles.container}
                  {...rest}
            >
                  <Text style={styles.text}>
                        {data.name}
                  </Text>
                  <Text style={styles.subtitle}>
                        {data.subtitle}
                  </Text>
            
            </RectButton>

      )
}

const styles = StyleSheet.create({
container: {
      flex: 1,
      borderColor: colors.back,
      borderRadius: 35,
      paddingVertical: 10,
      alignItems: 'center',
      margin: 10,
      borderWidth: 2,
      height:160
},
text: {
      fontSize: 20,
      color: colors.black,
      marginVertical: 5,
      marginRight: 5,
      marginLeft: 5
},
subtitle: {
      fontSize: 16,
      color: colors.black,
      marginVertical: 2
}
});