import { StyleSheet } from 'react-native'
 export const style  = StyleSheet.create({

    mainContainer:{
        
        display:'flex',
        flex:1,
        justifyContent:'flex-start',
        marginTop:20,
        padding:10
        
    },
    labelstyle:{
        fontFamily:"serif", 
        fontWeight:500, 
        padding:5, 
        fontSize: 22, 
        color:'black'
    },
    container:{
        fontSize:20,
        marginBottom:10,
        outline:null,
        marginTop:10
    },

    signIn:{
            borderRadius: 10,
            backgroundColor: "black",
            opacity:0.6,
            width:150,
    },
    registration:{
        marginTop:20,
        alignItems:'flex-start',
        padding:7
    },

    forgot:{
        fontSize: 18,
        color: 'blue',
        marginBottom: 6
    }

})