import { Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor: "#e8e8e8",
        width: Dimensions.get("window").width /2.2,
        margin: 8,
        borderRadius: 7,
        
        
        
    },
    
    image: {
        borderRadius: 7,
        height: 250,
        margin:10,
        resizeMode: 'contain'
    },

    textTitle:{
        marginLeft:10,
        fontWeight: "bold",
        color:"black",
        fontSize: 18,
        
    },
    textPrice:{
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 17,
    },
    stock: {
        color: "red",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 8,
    },
  
  
});

