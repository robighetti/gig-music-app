import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
width: 100%;
`;

export const Error = styled.Text`
  color: ${({theme}: any) => theme.colors.attention};

  font-size: ${RFValue(14)}px;
  font-family: ${({theme}: any) => theme.fonts.regular};

  margin: 7px;
`;
