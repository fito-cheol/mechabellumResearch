import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface ITextInputProps {
  dropCount: number;
  onSelect: (round: string) => void;
}

export default function DropDownInput({ dropCount, onSelect }: ITextInputProps) {
  const [selectedNumber, setSelectedNumber] = React.useState<string>('');

  const handleChange = (value: string) => {
    setSelectedNumber(value);
    onSelect(value);
  };

  function createItems(n: number) {
    const items = [];
    for (let i = 1; i <= n; i++) {
      items.push(
        <MenuItem key={`DropDown ${i}`} value={i}>
          {i}
        </MenuItem>,
      );
    }
    return items;
  }
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>Round</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectedNumber ? selectedNumber : dropCount.toString()}
        label='Round'
        onChange={event => handleChange(event.target.value)}
      >
        {createItems(dropCount)}
      </Select>
    </FormControl>
  );
}
