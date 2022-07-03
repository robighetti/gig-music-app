import React from 'react';
import { Text } from 'react-native';
import { DatePicker } from '../../components/DatePicker';

import { Container } from './styles';

const Agenda: React.FC = () => {
  
  return (
    <Container>
      <Text>Agenda</Text>
      <DatePicker></DatePicker>
    </Container>
  );
};

export { Agenda };
