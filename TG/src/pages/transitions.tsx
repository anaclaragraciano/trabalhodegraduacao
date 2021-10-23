import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Transitions = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Perfil de usuário
      </Text>
    </View>
  )
}

export default Transitions;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
 },
 title:{
    fontSize:25,
 }
});