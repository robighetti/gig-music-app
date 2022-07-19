import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { date } from 'yup';
import { DatePicker } from '../../components/DatePicker';
import { Form, Title } from '../Login/styles';

import { Container } from './styles';

const Agenda: React.FC = () => {
  const handleSelectedDate = useCallback((event: Event) => {    
  }, []);
  return (
    <Container>
      <Title>Agenda</Title>
      <DatePicker handleSelectedDate={handleSelectedDate}></DatePicker>
      <DatePicker handleSelectedDate={handleSelectedDate}></DatePicker>
    </Container>
  );
};

export { Agenda };
