import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  Stack,
  Divider,
  Grid,
} from "@mui/material";

import Person2Icon from "@mui/icons-material/Person2";
import CallIcon from "@mui/icons-material/Call";

import UploadField from "./UploadFields";

const steps = ["Basic Info", "Contact Details", "Review & Submit"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setFormData({ name: "", age: "", email: "", phone: "" });
    setActiveStep(0);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <Box
              sx={{
                display: {
                  xs: "row",
                  md: "flex",
                  gap: 20,
                  justifyContent: "space-evenly",
                  padding: 3,
                },
              }}>
              <Box maxWidth={800}>
                <Typography fontWeight={"bold"} variant="h6">
                  <Person2Icon />
                  Personal Information
                </Typography>

                <Box gap={1}>
                  <TextField
                    margin="dense"
                    label="First Name"
                    variant="filled"
                    fullWidth
                    required
                  />
                  <TextField
                    margin="dense"
                    label="Last Name"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Box>

                <Box
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "flex",
                      lg: "flex",
                    },
                  }}
                  gap={2}>
                  <TextField
                    margin="dense"
                    label="Date of Birth"
                    variant="filled"
                    sx={{ minWidth: 300 }}
                    type="date"
                  />

                  <FormControl component="fieldset">
                    <FormLabel
                      component="legend"
                      style={{ fontWeight: "bold", paddingTop: 4 }}>
                      Gender
                    </FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <TextField
                  margin="dense"
                  label="Birth Place"
                  variant="filled"
                  fullWidth
                  required
                />

                <TextField
                  margin="dense"
                  label="Father's Name"
                  variant="filled"
                  fullWidth
                  required
                />

                <Box sx={{ display: { md: "flex" } }} gap={1}>
                  <Box display={"flex"} gap={3}>
                    <Box>
                      <Stack>
                        <TextField
                          margin="dense"
                          label="Nationality"
                          variant="filled"
                          fullWidth
                          required
                          type="text"
                        />

                        <TextField
                          margin="dense"
                          label="Religion"
                          variant="filled"
                          fullWidth
                          required
                          type="text"
                        />
                      </Stack>
                    </Box>

                    <Box padding={2}>
                      <Divider orientation="vertical" />
                    </Box>

                    <Box>
                      <FormControl component="fieldset">
                        <FormLabel
                          component="legend"
                          style={{ fontWeight: "bold", paddingTop: 4 }}>
                          Martial Status{" "}
                        </FormLabel>
                        <RadioGroup>
                          <FormControlLabel
                            value="Single"
                            control={<Radio />}
                            label="Single"
                          />
                          <FormControlLabel
                            value="Married"
                            control={<Radio />}
                            label="Married"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>

                <TextField
                  margin="dense"
                  label="Sponse Name"
                  variant="filled"
                  fullWidth
                  type="text"
                />
              </Box>

              <Box maxWidth={700}>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="filled"
                  fullWidth
                  required
                  type="email"
                />

                <TextField
                  margin="dense"
                  label="Phone"
                  variant="filled"
                  fullWidth
                  required
                  type="number"
                />

                <Typography fontWeight={"bold"} variant="h6" paddingTop={2}>
                  <CallIcon /> Contact Information
                </Typography>
                <TextField
                  margin="dense"
                  label="Address 1"
                  variant="filled"
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  label="Address 2"
                  variant="filled"
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  label="Country"
                  variant="filled"
                  fullWidth
                  required
                />

                <Box display={"flex"} gap={1}>
                  <TextField
                    margin="dense"
                    label="State"
                    variant="filled"
                    fullWidth
                    required
                  />

                  <TextField
                    margin="dense"
                    label="City"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Box>

                <TextField
                  sx={{ width: 200 }}
                  margin="dense"
                  label="PinCode"
                  variant="filled"
                  fullWidth
                  required
                />
              </Box>
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Box
              sx={{
                display: {
                  xs: "row",
                  md: "flex",
                  gap: 20,

                  padding: 3,
                },
              }}>
              <Box sx={{ maxWidth: 500 }}>
                <Typography variant="h6" fontWeight={"bold"} pb={2}>
                  Educartional Qualification
                </Typography>
                <FormControl variant="filled" fullWidth required>
                  <InputLabel>Highest Qualification</InputLabel>
                  <Select label="Highest Qualification">
                    <MenuItem value="bachelor">Bachelor's Degree</MenuItem>
                    <MenuItem value="master">Master's Degree</MenuItem>
                    <MenuItem value="phd">Ph.D.</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  margin="dense"
                  label="Specialization"
                  variant="filled"
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  label="Year of Passing"
                  variant="filled"
                  fullWidth
                  required
                  type="number"
                />
                <TextField
                  margin="dense"
                  label="College/University"
                  variant="filled"
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  label="Marks/CGPA"
                  variant="filled"
                  fullWidth
                  required
                />
              </Box>

              <Grid size={4}>
                <Box>
                  <TextField
                    margin="dense"
                    label="Marks/CGPA"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Box>
                <UploadField />
              </Grid>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6">Review Details:</Typography>
            <Typography>Name: {formData.name}</Typography>
            <Typography>Age: {formData.age}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Phone: {formData.phone}</Typography>
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box justifyContent={"center"} minHeight={100 + "vh"} display={"flex"}>
      <Box sx={{ width: "85%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed – your data is submitted!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
