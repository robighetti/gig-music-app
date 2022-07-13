import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { DatePicker } from '../../components/DatePicker';

import { Container } from './styles';

const Agenda: React.FC = () => {
  const handleSelectedDate = useCallback((event: Event) => {    
  }, []);
  return (
    <Container>
      <Text>Agenda</Text>
      <DatePicker handleSelectedDate={handleSelectedDate}></DatePicker>
    </Container>
  );
};

export { Agenda };
