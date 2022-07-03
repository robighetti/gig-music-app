import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`  
flex: 1;  

background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
width: 100%;

background-color: ${({theme}) => theme.colors.primary};

justify-content: center;
align-items: center;
flex-direction: row;
`;
