import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

// Its for displaying the choices..
const currencies = [
  {
    value:"Full Stack development",
    label: "Full Stack development"
  },
  {
    value: "3D Modelling",
    label: "3D Modelling",
  },
  {
    value: "Software - Intern",
    label: "Software - Intern",
  },
  
];

export default function FormDialog() {
    
    const [value, setValue] = React.useState(dayjs('2022-04-17'));


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
      
      maxWidth={"md"}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}>
        <DialogTitle>Enteries</DialogTitle>
        <DialogContent style={{
            alignItems:"center"
        }}>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}

          <Box
            sx={{
              display: {
                xs: "row",
                md: "flex",
              },
              
            }}>
            <Box maxWidth={420}>
              <TextField
                autoFocus
                required
                margin="dense"
                placeholder="Enter Employee Name "
                label="Employee Name"
                type="text"
                fullWidth
                variant="outlined"
              />

              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="Email "
                placeholder="Enter Email"
                type="email"
                fullWidth
                variant="outlined"
              />

              <TextField
                autoFocus
                required
                margin="dense"
                label="Phone Number"
                type="email"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                required
                margin="dense"
                label="City"
                type="text"
                fullWidth
                variant="outlined"
              />
            </Box>

            <Box padding={2}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup>
                  <Box display={"flex"}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>

              <TextField
                select
                label="Department"
                fullWidth
                >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                
                required
                margin="dense"
                label="City"
                type="text"
                fullWidth
                variant="outlined"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="Join Date"  />
                    </DemoContainer>
                  </LocalizationProvider>
            </Box>
          </Box>
        </DialogContent>
        
        <DialogActions style={{
            justifyContent:"center"
        }}>

          <Button style={{borderRadius:20}} color="success" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" style={{borderRadius:20}} color="success" type="submit">Submit</Button>
        </DialogActions>
       
      </Dialog>
    </React.Fragment>
  );
}
