import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

import { OptionsButton } from "../components/OptionsButton";
import {CategoryButton} from '../components/CategoryButton';

import api from "../services/api";
import colors from "../styles/colors";

interface InformationProps {
    navigation: any;
}

interface OptionsProps{
    id: string;
    title: string;
}

interface CategoryProps{
    id: string;
    title: string;
    letter: string;
}

const Information = (props: InformationProps) => {
  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [category, setCategory] = useState<CategoryProps[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<CategoryProps[]>([]);
  const [optionsSelected, setOptionsSelected] = useState('all');

  function handleOptionsSelected(option: string){
    setOptionsSelected(option);

    if(option == 'all')
      return setFilteredCategory(category);

    const filtered = category.filter(cat =>
        cat.letter.includes(option)
    );

    setFilteredCategory(filtered);

  }
  
  useEffect(() => {
    async function fetchOptions(){
      const { data } = await api.get('options');
      setOptions([
        {
           id:'all',
           title: "TODOS",
        },
        ...data
      ]);
    }
    fetchOptions();
  },[])

  useEffect(() => {
    async function fetchCategory(){
        const { data } = await api.get('category');
        setCategory(data);
    }

    fetchCategory();
},[ ])

  return(
      <SafeAreaView style={styles.container}>
          <View style={styles.background}>
            <Text style={styles.title}>
              Ocupações permitidas 
              para {'\n'} o MEI
            </Text>
            <Text style={styles.subtitle}>
              Veja as atividades permitidas para se tornar um Microempreendedor Individual.
            </Text>
            <View>
              <FlatList 
                data={options}
                renderItem={({item}) => (
                  <OptionsButton 
                    title= {item.title}
                    active={item.id==optionsSelected}
                    onPress={() => handleOptionsSelected(item.title)}
                  />
                )}
                horizontal
                contentContainerStyle={styles.optionsList}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <FlatList
              data={filteredCategory}
              renderItem={({item}) => (
                <CategoryButton 
                  data={item}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
      </SafeAreaView>
  )

}

export default Information;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors.back,
 },
    background: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      flex: 1,
      marginTop: 60,
      width: '100%'
   },
    title:{
      fontSize:25,
      color: colors.blue_dark,
      fontWeight: 'bold',
      marginTop: 30,
      paddingHorizontal: 20,
      alignItems: 'center'
   },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.blue_dark,
        marginTop:10
    },
    optionsList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 20,
        marginVertical: 32
    }
});