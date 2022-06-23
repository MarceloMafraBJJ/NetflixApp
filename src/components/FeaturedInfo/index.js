import React from 'react';
import IconCaretDown from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Content,
  Items,
  TitleInfo,
  Watch,
  Title,
  Genres,
  TitleGenre,
} from './styles';

export default ({item}) => {
  let genresMovie = item.genres;
  let genres = genresMovie.filter(items => items.name);
  let genresId = genresMovie.filter(items => items.id);
  console.log(genresId);

  const GenresComponent = () => {
    return genres.map((genre, index) => (
      <TitleGenre key={index}>{genre.name}</TitleGenre>
    ));
  };
  const GenresComponentId = () => {
    return genresId.map((genre, index) => (
      <TitleGenre key={index}>{genre.id}</TitleGenre>
    ));
  };

  const RenderGenres = () => {
    if (genres.length >= 2) {
      return GenresComponent();
    } else if (genres.length <= 1) {
      return <TitleGenre>{GenresComponentId()}</TitleGenre>;
    }
  };

  return (
    <Container>
      <Genres>{RenderGenres()}</Genres>
      <Content>
        <Items>
          <IconCaretDown
            name="plus"
            size={20}
            color="#fff"
            style={{marginRight: 10}}
          />
          <TitleInfo>Minha Lista</TitleInfo>
        </Items>
        <Watch>
          <IconCaretDown
            name="caretright"
            size={20}
            color="#000"
            style={{marginRight: 10}}
          />
          <Title>Assistir</Title>
        </Watch>
        <Items>
          <IconCaretDown
            name="infocirlceo"
            size={20}
            color="#fff"
            style={{marginRight: 10}}
          />
          <TitleInfo>Saiba Mais</TitleInfo>
        </Items>
      </Content>
    </Container>
  );
};
