import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    div:{
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/9+10,
        backgroundColor: "#253D44",
        borderRadius: 10,
        marginLeft: 20,
        flex:1,
        marginBottom:20
    },
    placeholder:{
        padding:5,
        marginHorizontal: 12,
        marginBottom:5,
        borderBottomWidth:0.7,
        borderBottomColor:"#69939F",
           
    },
    button:{
        backgroundColor:"#808081",
        borderRadius: 10,
        alignItems:"center",
        marginTop: 5,
        marginHorizontal:20,
        padding:8,
        marginBottom:5
    },
    buttonText:{
        color:"white",
        fontWeight:"400",
        fontSize: 15,
    },
    filledButton:{
        backgroundColor:"orange",
        borderRadius: 10,
        alignItems:"center",
        marginTop: 5,
        marginHorizontal:20,
        padding:8,
        marginBottom:5
    }
    
});