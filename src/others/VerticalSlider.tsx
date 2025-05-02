import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function VerticalSlider() {
  return (
    <Stack sx={{ height: 150 }} spacing={1} direction="row">
      
      
      <Slider sx={{color:"black"}}
        getAriaLabel={() => 'Temperature'}
        orientation="vertical"
        
        getAriaValueText={getAriaValueText}
        defaultValue={[20, 37]}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Stack>
  );
}

function getAriaValueText(value: number) {
  return `${value}`;
}

const marks = [
  {
    value: 0,
    label: '10 AM',
  },
  {
    value: 15,
    label: '11 AM',
  },
  {
    value: 30,
    label: '12 PM',
  },
  {
    value: 45,
    label: '1 PM',
  },
  {
    value: 60,
    label: '2 PM',
  },
  {
    value: 75,
    label: '3 PM',
  },
  {
    value: 90,
    label: '4 PM',
  },
];
