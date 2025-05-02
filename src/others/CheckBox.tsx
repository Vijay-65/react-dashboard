import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

export default function CheckboxLabels() {
  return (

    <>
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <FormControlLabel control={<Checkbox color="warning" />} label="Sunrise" />
      <FormControlLabel control={<Checkbox color="warning" />} label="Parking" />
      <FormControlLabel control={<Checkbox color="warning" />} label="RestRooms" />
      <FormControlLabel control={<Checkbox color="warning" />} label="Allowance" />
    </Box>
    </>
      
    
  );
}
