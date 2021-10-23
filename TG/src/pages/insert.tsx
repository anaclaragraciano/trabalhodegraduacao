import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Insert = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Inserir cliente
      </Text>
    </View>


  )
}

export default Insert;

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