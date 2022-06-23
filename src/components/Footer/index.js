import React from 'react';
import {Container, Button, Title, Content} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import IconController from 'react-native-vector-icons/Ionicons';
import IconPlay from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDownload from 'react-native-vector-icons/Feather';

const Footer = () => {
  return (
    <Container>
      <Content>
        <Button>
          <Icon name="home" size={20} color="#ddd" />
          <Title> Início </Title>
        </Button>
      </Content>

      <Content>
        <Button>
          <IconController
            name="game-controller-outline"
            size={20}
            color="#ddd"
          />
          <Title> Jogos </Title>
        </Button>
      </Content>

      <Content>
        <Button>
          <IconPlay name="play-box-multiple-outline" size={20} color="#ddd" />
          <Title> Novidades </Title>
        </Button>
      </Content>

      <Content>
        <Button>
          <Icon name="emoji-happy" size={20} color="#ddd" />
          <Title> Risadas Rápidas </Title>
        </Button>
      </Content>

      <Content>
        <Button>
          <IconDownload name="arrow-down-circle" size={20} color="#ddd" />
          <Title> Downloads </Title>
        </Button>
      </Content>
    </Container>
  );
};

export default Footer;
