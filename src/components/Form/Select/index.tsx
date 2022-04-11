import React from 'react';

import { Container, PickerSelect, PickerSelectItem } from './styles';

interface ItemsProps {
  label: string;
  value: string;
}

interface Props {
  items: ItemsProps[];
  setSelectedItem: Function;
  selectedItem: string;
}

const Select: React.FC<Props> = ({ items, setSelectedItem, selectedItem }) => {
  return (
    <Container>
      <PickerSelect
        selectedValue={selectedItem}
        onValueChange={(item: any) => setSelectedItem(item)}
        mode="dialog"
      >
        {items.map(item => {
          return (
            <PickerSelectItem
              key={item.value}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </PickerSelect>
    </Container>
  );
};

export { Select };
