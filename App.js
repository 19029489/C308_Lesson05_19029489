/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Movie, MovieList} from './Movies.js';
import {BoatList} from './Boats.js';
import {ScrollView, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercises{'\n'}</Text>
      <Movie />
      <MovieList />
      <Text>{'\n'}GetABoat - For Sale</Text>
      <BoatList />
    </ScrollView>
  );
};

export default App;
