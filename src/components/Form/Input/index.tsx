import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText, Icon } from './styles';

interface Props extends TextInputProps {
  icon?: string;
  error?: boolean;
}

const Input: React.FC<Props> = ({
  icon,
  value,
  onChangeText,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused} error={error}>
      {icon && <Icon name={icon} size={20} />}

      <InputText
        {...rest}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export { Input };
