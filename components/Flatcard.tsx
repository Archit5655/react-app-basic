import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Flatcard() {
  return (
    <View>
      <Text style={styles.headtext}>Flatcard</Text>
    

      <View style={styles.container}>
        <View style={[styles.card,styles.cardone]}>

        <Text  style={styles.text}>REd card</Text>
        </View>   
          <View style={[styles.card,styles.card2]}>

        <Text  style={styles.text}>REd card</Text>
        </View> 
        <View style={[styles.card,styles.card3]}>

        <Text style={styles.text} >REd card</Text>
        </View> 
         <View style={[styles.card,styles.card3]}>

        <Text style={styles.text} >REd card</Text>
        </View> 
         
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    text:{
color:'white'
    },
  headtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 150,
    paddingVertical: 10,
  },
  container: {
    flex:1,
    flexDirection:'row'
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    width:'20%',
    alignItems: 'center',
    height: 150,
    borderRadius: 10,
    margin: 8,
  },
  cardone: {
    backgroundColor: '#f56642',
  },
  card2: {
    backgroundColor: 'green',
  },
  card3: {
    backgroundColor: 'blue',
  },
});
