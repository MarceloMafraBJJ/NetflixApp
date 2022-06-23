import React from 'react';
import {ImageMovie, ImageArea} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FeaturedInfo from '../FeaturedInfo';

export default ({item}) => {
  return (
    <ImageArea>
      <ImageMovie
        style={{resizeMode: 'cover'}}
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
        }}>
        <>
          <LinearGradient
            colors={['transparent', '#000']}
            style={{flex: 1, zIndex: 2}}
          />
        </>
      </ImageMovie>
      <FeaturedInfo item={item} />
    </ImageArea>
  );
};