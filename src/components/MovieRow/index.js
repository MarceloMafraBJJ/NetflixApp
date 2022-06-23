import React from 'react';
import {Container, ListArea, ListItem, Title, ImageMovie, List} from './styles';
import {useNavigation} from '@react-navigation/native';

const MovieRow = ({title, items}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>{title}</Title>
      <ListArea>
        <List
          data={items}
          horizontal
          renderItem={({item}) => {
            return (
              <ListItem>
                <ImageMovie
                  source={{
                    uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                  }}
                />
              </ListItem>
            );
          }}
        />
      </ListArea>
    </Container>
  );
};

export default MovieRow;
