import React, { useState, useMemo, useCallback } from 'react';
import { pt } from 'date-fns/locale';
import { format } from 'date-fns';

import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, DateText, Icon } from './styles';

interface Props {
  handleSelectedDate: (date: Date) => void;
}

const DatePicker: React.FC<Props> = ({ handleSelectedDate }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const formatedDate = useMemo(() => {
    const newDate = format(date, "d 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
    return newDate;
  }, [date]);

  const handleShowDatePicker = useCallback(() => {
    setShow(true);
  }, []);

  const handleChangeDate = useCallback(
    (_: Event, selectedDate: Date | undefined) => {
      const currentDate = selectedDate || date;

      handleSelectedDate(currentDate);

      setDate(currentDate);
      setShow(false);
    },
    []
  );

  return (
    <Container onPress={handleShowDatePicker}>
      <DateText>{formatedDate}</DateText>
      <Icon name="calendar" />

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleChangeDate}
        />
      )}
    </Container>
  );
};

export { DatePicker };
