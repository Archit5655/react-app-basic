import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.heading}>cats</Text>
      <View style={[styles.card, styles.cardimage]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          height={200}
          style={styles.image}
        />
              <Image
          source={{
            uri: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          height={200}
          style={styles.image}
        />
              <Image
          source={{
            uri: 'https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          height={200}
          style={styles.image}
        />

        <View>
       
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 150,
    paddingVertical: 10,
  },
  card: {},
  cardimage: {},
  image: {
    margin: 13,
    borderRadius: 20,
  },
});
