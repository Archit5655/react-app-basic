import React from 'react';
import {View, Text, SafeAreaView,Button, ScrollView} from 'react-native';
import Flatcard from './components/Flatcard';
import ScrollableCard from './components/ScrollableCard';
import ImageCard from './components/ImageCard';

function App() {

  return (
    <SafeAreaView>
      <ScrollView>


 <Flatcard/>
 <ScrollableCard/>
 <ImageCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
