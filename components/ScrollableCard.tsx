import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollableCard = () => {
  return (
    <View>
      <Text style={styles.headtext}>ScrollableCard </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.container}>
        <View style={[styles.card, styles.scroll]}>
          <Text>TAb</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>TAb</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>press</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>react</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>native</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>learning</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>learning</Text>
        </View>
        <View style={[styles.card, styles.scroll]}>
          <Text>learning</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollableCard;

const styles = StyleSheet.create({
  color: {
    color: 'white',
  },
  headtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 150,
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 100,
  },
  scroll: {
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#dbd4a7',
  },
  container: {
    padding: 8,
  },
});
