import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: -50px;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Items = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Genres = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Watch = styled.TouchableOpacity`
  background-color: #fff;
  height: 40px;
  border-radius: 3px;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const TitleInfo = styled.Text`
  color: #fff;
  margin-top: 5px;
`;
export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;
export const TitleGenre = styled.Text`
  color: #eee;
  font-size: 15px;
  padding: 10px;
`;
