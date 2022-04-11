import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;

  border-width: 2px;
  border-color: ${({theme}) => theme.colors.primary_light};
  background: ${({theme}) => theme.colors.primary_light};
  border-radius: 8px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
`;

export const PickerSelect = styled(Picker)`
  flex: 1;
  height: ${RFValue(50)}px;
  width: 100%;

  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const PickerSelectItem = styled(Picker.Item)`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
