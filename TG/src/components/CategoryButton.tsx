import React from "react";
import { StyleSheet, Text} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from "../styles/colors";

interface CardProps extends RectButtonProps {
      data: {
            title: string;
      }
}

export const CategoryButton = ({data, ...rest} : CardProps ) => {
      return(
            <RectButton 
                  style={styles.container}
                  {...rest}
            >
                  <Text style={styles.text}>
                      {data.title}
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
      height:60
},
text: {
      fontSize: 18,
      color: colors.black,
      marginVertical: 5,
      marginRight: 5,
      marginLeft: 5
}
});