import React from 'react';
import {Image, View, Text} from 'react-native';

//Exercise 2
const movie = {title: 'Doctor Sleep', year: '2019'};

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.props.year}</Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}
//Exercise 3
//const MOVIES_DATA = ['Doctor Sleep', 'Midway'];

// const MovieList = () => {
//   return MOVIES_DATA.map((title) => <Text>{title}</Text>);
// };

//Exercise 4
// const MOVIES_DATA = [
//   {
//     title: 'Doctor Sleep',
//     year: '2019',
//   },
//   {
//     title: 'Midway',
//     year: '2019',
//   },
// ];

// const MovieList = () => {
//   return MOVIES_DATA.map((movie) => {
//     return <Movie title={movie.title} year={movie.year} />;
//   });
// };

//Exercise 5
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIES_DATA.map((movie) => {
    return (
      <Movie title={movie.title} year={movie.year} poster={movie.poster} />
    );
  });
};

export {Movie, MovieList};
