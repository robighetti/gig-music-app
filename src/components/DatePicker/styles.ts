import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(60)}px;

  padding: 0 16px;
  background: ${({theme}) => theme.colors.primary_light};
  border-radius: 8px;
  margin-top: 8px;

  border-width: 2px;
  border-color: ${({theme}) => theme.colors.primary_light};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`
;

export const DateText = styled.Text`
  flex: 1;
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  padding-top: 4px;
`;

export const Icon = styled(Feather)`
  margin-right: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
`;

