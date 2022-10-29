import { View, Text } from 'react-native'
import React from 'react'
import styles from "./Header.styles"

const Header = (props) => {
  function activeCount(){
    const active = props.list.filter(item=>(item.completed==false));
    return active.length;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODOS</Text>
      <Text style={styles.header}>{activeCount()}</Text>
    </View>
  )
}

export default Header