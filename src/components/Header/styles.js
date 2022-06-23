import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  margin-top: 20px;

`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`;
export const ContentImages = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const ViewArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TitleMovie = styled.View`
  flex-direction: row;
`;
export const TitletArea = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonSearch = styled.TouchableOpacity``;
export const Button = styled.TouchableOpacity`
  margin: 0px 20px 15px 20px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`;
