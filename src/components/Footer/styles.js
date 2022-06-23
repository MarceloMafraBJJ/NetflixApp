import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: #1c1c1c;
`;
export const Content = styled.View`
  width: 25%;
`;
export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 10px;
  color: #ddd;
`;
