import React from 'react';
import Home from './Home';
import {StatusBar} from 'react-native';
import {Container} from './Home/styles';
import Footer from './components/Footer/index';

export default function App() {
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <Home />
      <Footer />
    </Container>
  );
}
