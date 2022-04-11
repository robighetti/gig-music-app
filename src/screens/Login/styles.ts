import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}: any) => theme.colors.background}
`;

export const Image = styled.Image`
  width: ${RFValue(170)}px;
  height: ${RFValue(170)}px;

  margin-top: 80px;
`;

export const Title = styled.Text`
  color: ${({theme}: any) => theme.colors.title};
  font-family: ${({theme}: any) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;

  margin-top: 10px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;

  padding: 24px;

  justify-content: space-between;
`;

export const Fields = styled.View``;
