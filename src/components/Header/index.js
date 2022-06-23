import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconCaretDown from 'react-native-vector-icons/AntDesign';
import {
  ContentImages,
  Content,
  ButtonSearch,
  Container,
  TitleMovie,
  ViewArea,
  TitletArea,
  Title,
  Button,
} from './styles';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ViewArea>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../assets/logo.png')}
        />
        <ContentImages>
          <ButtonSearch onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={30} color="#fff" />
          </ButtonSearch>
          <Image
            style={{width: 30, height: 30, borderRadius: 8, marginLeft: 20}}
            source={require('../../assets/avatar.jpg')}
          />
        </ContentImages>
      </ViewArea>

      <Content>
        <TitleMovie>
          <Button>
            <Title>Séries</Title>
          </Button>
          <Button>
            <Title>Filmes</Title>
          </Button>
          <Button>
            <TitletArea>
              <Title>Categorias</Title>
              <IconCaretDown
                name="caretdown"
                size={15}
                color="#fff"
                style={{marginLeft: 10}}
              />
            </TitletArea>
          </Button>
        </TitleMovie>
      </Content>
    </Container>
  );
};

export default header;
