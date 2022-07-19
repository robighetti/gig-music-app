import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}: any) => theme.colors.background}
`;
/*export const Container = styled.View`  
flex: 1;  

background-color: ${({theme}) => theme.colors.background};
`;*/

export const Header = styled.View`
width: 100%;

background-color: ${({theme}) => theme.colors.primary};

justify-content: center;
align-items: center;
flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;