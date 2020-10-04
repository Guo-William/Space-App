import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useState } from 'react';

function IncomeCheckBox({ min, max }, currentValue, onChange) {
  const fcl = <FormControlLabel
    key={`${min}-${max}`}
    control={<Checkbox checked={currentValue.max === max && currentValue.min === min} onChange={() => onChange({ min, max })} />}
    label={min ? `$${min.toLocaleString('us-EN')}-$${max.toLocaleString('us-EN')}` : `$${max.toLocaleString('us-EN')}+` }
  />
  return fcl;
}

export default IncomeCheckBox;