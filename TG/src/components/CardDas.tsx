import React from "react";
import { StyleSheet, Text} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from "../styles/colors";

interface CardDasProps extends RectButtonProps {
      data: {
            title: string;
            subtitle: string;
            status: string;
      }
}

export const CardDas = ({data, ...rest} : CardDasProps ) => {
      return(
            <RectButton 
                  style={styles.container}
                  {...rest}
            >
                <Text style={styles.status}>
                    {data.status}
                </Text>
                <Text style={styles.text}>
                    {data.title}
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
    margin: 10,
    borderWidth: 2,
    height:120
},
status:{
    fontSize: 16,
    color: colors.blue_dark,
    marginTop: 20,
    marginRight: 40,
    fontWeight: 'bold',
    textAlign: 'right'
},
text: {
    fontSize: 20,
    color: colors.black,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 30
},
subtitle: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30
}
});