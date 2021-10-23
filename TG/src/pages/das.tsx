import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const DAS = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Inserir DAS
      </Text>
    </View>


  )
}

export default DAS;

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