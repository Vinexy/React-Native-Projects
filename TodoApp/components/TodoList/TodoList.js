import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from "./TodoList.styles"

const TodoList = (props) => {

  
  
  
  return (
    <View style={styles.container}>
      <FlatList 
      data={props.list} 
      renderItem={({item}) => 
        <Text 

          onLongPress={()=>{ props.setList(props.list.filter(x=>x.id!=item.id));} } 

          onPress={()=> props.setList(props.list.map(x=>(x.id === item.id ? {...x, completed: !x.completed}:x )))}

          style={ item.completed ? styles.completedLi : styles.li } >{item.text}
          
        </Text>}  />
    </View>
  )
}

export default TodoList