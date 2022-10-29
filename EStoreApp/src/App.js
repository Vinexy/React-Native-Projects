
import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { create } from "react-test-renderer";
import Product from "../product.json";
import Card from "./Cards/Card"

const App = () =>{

  return(
    <SafeAreaView style={{flex:1}}>
      <Text style={styles.header}>VineX E-Store</Text>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <FlatList numColumns={2} data={Product} renderItem={({item}) => <Card content={item}  />} /> 
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  header:{
    marginTop: 10,
    marginLeft:10,
    marginBottom:5,
    color: "purple",
    fontSize: 28,
    fontWeight: "bold"
  },
  searchBar:{
    backgroundColor: "#e8e8e8",
    marginLeft: 10,
    marginRight:10,
    borderRadius: 12,
    marginBottom:5,

  }
})

export default App;