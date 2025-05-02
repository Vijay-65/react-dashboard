import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const MAX = 8000;
const MIN = 100;
const marks = [
  {
    value: MIN,
    label: '100 rs',
  },
  {
    value: MAX,
    label: '8000 rs',
  },
];

export default function CustomMarks() {
  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number) => {
    setVal(newValue);
  };

  return (
    <Box sx={{ Width: 300 }}>
      <Slider sx={{color:'#384040', width:250}}
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{ cursor: 'pointer' }}
        >
          {/* {MIN} min */}
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{ cursor: 'pointer' }}
        >
          {/* {MAX} max */}
        </Typography>
      </Box>
    </Box>
  );
}
