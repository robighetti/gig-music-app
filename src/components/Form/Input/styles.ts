import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";
import FeatherIcon from '@expo/vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  error?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFValue(60)}px;

  padding: 0 16px;
  background: ${({theme}: any) => theme.colors.primary_light};
  border-radius: 8px;
  margin-top: 8px;

  border-width: 2px;
  border-color: ${({theme}: any) => theme.colors.primary_light};

  flex-direction: row;
  align-items: center;

  ${(props: any) => props.isFocused && css`
    border-color: ${({theme}: any) => theme.colors.secondary};
  `}

  ${(props: any) => props.error && css`
  border-color: ${({theme}: any) => theme.colors.attention};
  `}
`;

export const InputText = styled(TextInput)`
  flex: 1;
  height: ${RFValue(60)}px;
  color: ${({theme}: any) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}: any) => theme.fonts.regular};
  padding-top: ${RFValue(4)}px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${RFValue(16)}px;
  color: ${({theme}: any) => theme.colors.secondary};
`;
