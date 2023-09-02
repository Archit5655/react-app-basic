import React from "react";
import {SafeAreaView,Text,useColorScheme, View,StyleSheet} from 'react-native'


interface appproprops{
children:React.ReactNode
}
const AppPro:React.FC<appproprops> = ({children}) => {
    const isDarkmode=useColorScheme()==='dark'
  return (
    <View style={styles.container}>
        <Text style={isDarkmode? styles.lightmode :styles.darkmode}>
            Archit bhai hello
                      kasie ho?
        </Text>
    </View>

  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
       
    },
    lightmode:{
        color:'#FFFFFF'
    },  darkmode:{
        color:'#000000',
       
        fontSize:23,
    },

    
})

export default AppPro

