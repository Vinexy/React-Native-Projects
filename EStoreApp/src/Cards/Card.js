import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./Card.style";

export default function Card(props) {
    
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.content.imgURL }} />
      <Text style={styles.textTitle}>{props.content.title}</Text>
      <Text style={styles.textPrice}>{props.content.price}</Text>
      <Text style={styles.stock} >{props.content.inStock ? "": "STOCK IS EMPTY"}</Text>
    </View>
  )
}

