import React, {useEffect, useState} from 'react';
import Api from '../../Api';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';
import Animeted, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import MovieScreen from '../MovieScreen';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadALL = async () => {
      //pegando a lista TOTAL
      let list = await Api.getHomeList();
      setMovieList(list);
      //Pegando o Featured
      let originals = list.filter(i => i.slug === 'originals');
      let ramdomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let chosen = originals[0].items.results[ramdomChosen];
      let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };
    loadALL();
  }, []);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 180], [120, 0], Extrapolate.CLAMP),
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 999,
    };
  });

  return (
    <>
      <Animeted.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <Animeted.View style={headerStyle}>
          <Header />
        </Animeted.View>
        {featuredData && <FeaturedMovie item={featuredData} />}
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items.results} />
        ))}
        {featuredData && <MovieScreen item={featuredData} />}
      </Animeted.ScrollView>
    </>
  );
};
