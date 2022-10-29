import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:6,
        marginTop:10,
    },
    li:{
        backgroundColor:"#7CAF4F",
        color:"white",
        margin:5,
        borderRadius:4,
        fontSize:18,
        paddingLeft:12,
        
        
    },
    completedLi:{
        textDecorationLine:"line-through",
        color: "#d9d9d9",
        backgroundColor:"#3A3A4D",
        margin:5,
        borderRadius:4,
        fontSize:18,
        paddingLeft:12,
    }
    
});