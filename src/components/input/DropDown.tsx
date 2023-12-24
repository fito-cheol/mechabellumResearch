import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface ITextInputProps {
  selectList: number[];
  onSelect: (round: string) => void;
}

export default function DropDownInput({ selectList, onSelect }: ITextInputProps) {
  const [selectedNumber, setSelectedNumber] = React.useState<string>('');

  const handleChange = (value: string) => {
    setSelectedNumber(value);
    onSelect(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>Round</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={
          selectedNumber ? selectedNumber : selectList.length == 0 ? '' : selectList[selectList.length - 1].toString()
        }
        label='Round'
        onChange={event => handleChange(event.target.value)}
      >
        {selectList.map(number => {
          return (
            <MenuItem key={`DropDown ${number}`} value={number}>
              {number}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
