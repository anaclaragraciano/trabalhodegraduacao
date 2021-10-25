import React from "react";
import { StyleSheet, Text} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from "../styles/colors";

interface DasStatusProps extends RectButtonProps {
      data: {
            title: string;
            status: string;
      }
}

export const DasStatus = ({data, ...rest} : DasStatusProps ) => {
      return(
            <RectButton 
                  style={styles.container}
                  {...rest}
            >
                <Text style={styles.text}>
                    {data.title}
                    <Text style={styles.status}>
                    {data.status}
                    </Text>
                </Text>
            </RectButton>
      )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    borderColor: colors.back,
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 2,
    height:50,
    width: 160,
    alignContent: "center",
    marginLeft: 30
},
text: {
    fontSize: 25,
    color: colors.blue_dark,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10
},
status:{
    fontSize: 16,
    color: colors.gray,
    marginTop: 20,
    marginLeft: 50
}
});