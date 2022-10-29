import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList/TodoList';
import Form from './Form/Form';
import Header from './Header/Header';


const App = () => {
  const [list,setList] = useState([]);
  console.log(list);
  return (
    <SafeAreaView style={styles.body}>
      <Header  list={list}/>
      <TodoList   setList={setList} list={list} />
      <Form  setList={setList} list={list} />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  body:{
     flex:1,
     flexDirection:"column",
     backgroundColor: "#0F101E" 
  }
  
  
  
  
})