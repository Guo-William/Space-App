import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function CheckBox({ value, label, shouldSpecify }, currentValue, onChange) {
  const [specificInfo, setSpecificInfo] = useState('');
  const fcl = <FormControlLabel
    key={value}
    control={<Checkbox value={value} checked={currentValue.value === value} onChange={() => onChange(value, specificInfo)} />}
    label={label}
  />
  const fclPlus = <div>
    {fcl}
    <TextField value={specificInfo} variant="outlined" onChange={(event) => { setSpecificInfo(event.target.value); onChange(value, event.target.value) }} />
  </div>
  return shouldSpecify ? fclPlus : fcl;
}

export default CheckBox;