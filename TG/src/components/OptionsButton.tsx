import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";

interface OptionsButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function OptionsButton ({
    title,
    active = false,
    ...rest
} : OptionsButtonProps) {
    return(
        <RectButton style= {[
                styles.container,
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text style= {[
                styles.text,
                active && styles.textActive
            ]}>
                { title }
            </Text>

        </RectButton>
    );
}

const styles= StyleSheet.create({
    container: {
        borderColor: colors.blue_dark,
        borderRadius: 12,
        borderWidth: 1,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: "center", 
        marginRight: 5,   
    },
    containerActive:{
        backgroundColor: colors.blue
    },
    text: {
        color: colors.blue_dark,

    },
    textActive: {
        color: colors.white
    }

})