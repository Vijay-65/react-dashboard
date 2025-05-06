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
  StepButton,
  Paper,
  styled,
} from "@mui/material";

import Person2Icon from "@mui/icons-material/Person2";
import CallIcon from "@mui/icons-material/Call";

import UploadField from "./UploadFields";
import BankNamesLabel from "./BankNamesLabel";
import ImgUploadPopup from "./ImageUpload";
import DeclarationSection from "./Declaration";

const steps = [
  "Basic Info",
  "Education Qualification",
  "Bank Account Information",
  "Review & Submit",
];



export default function HorizontalLinearStepper() {


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));






  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    birthPlace: "",
    FatherName: "",
    martialStatus: "",
    email: "",
    phno: "",
    degree: "",
    specialization: "",
    gpa: "",
    bankName: "",
    accNum: "",
    ifsc: "",
    branch: "",
    panNum: "",
    aadharNum: "",
    uploadedIdPreview:""
  });

  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setFormData({ name: "", age: "", email: "", phone: "" });
  //   setActiveStep(0);
  // };

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
              <Box>
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
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  <TextField
                    margin="dense"
                    label="Last Name"
                    variant="filled"
                    fullWidth
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
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
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
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
                  value={formData.FatherName}
                  onChange={(e) =>
                    setFormData({ ...formData, FatherName: e.target.value })
                  }
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

              <Box>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="filled"
                  fullWidth
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <TextField
                  margin="dense"
                  label="Phone"
                  variant="filled"
                  fullWidth
                  required
                  type="number"
                  value={formData.phno}
                  onChange={(e) =>
                    setFormData({ ...formData, phno: e.target.value })
                  }
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
                  gap: 30,

                  padding: 3,
                  justifyContent: "space-evenly",
                },
              }}>
              <Box>
                <Typography variant="h6" fontWeight={"bold"}>
                  SSLC
                </Typography>

                <TextField
                  margin="dense"
                  label="SSLC Mark/Percentage"
                  variant="filled"
                  fullWidth
                  required
                />

                <TextField
                  margin="dense"
                  label="School"
                  variant="filled"
                  fullWidth
                  required
                />

                <FormControl variant="filled" fullWidth required margin="dense">
                  <InputLabel>Passed out </InputLabel>
                  <Select label="Passed Out ">
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2019">2019</MenuItem>
                  </Select>
                </FormControl>

                <Typography variant="h6" fontWeight={"bold"}>
                  HSC
                </Typography>

                <TextField
                  margin="dense"
                  label="HSC Mark/Percentage"
                  variant="filled"
                  fullWidth
                  required
                />

                <TextField
                  margin="dense"
                  label="School"
                  variant="filled"
                  fullWidth
                  required
                />

                <FormControl variant="filled" fullWidth required margin="dense">
                  <InputLabel>Passed out </InputLabel>
                  <Select label="Passed Out ">
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2019">2019</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box maxWidth={700}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Degree
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
                  value={formData.specialization}
                  onChange={(e) =>
                    setFormData({ ...formData, specialization: e.target.value })
                  }
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
                  value={formData.gpa}
                  onChange={(e) =>
                    setFormData({ ...formData, gpa: e.target.value })
                  }
                />

                <UploadField />
              </Box>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Box
              sx={{
                display: {
                  xs: "row",
                  md: "flex",

                  padding: 3,
                  justifyContent: "space-evenly",
                },
              }}>
              <Box maxWidth={700}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Bank Information
                </Typography>

                <BankNamesLabel />

                <TextField
                  margin="dense"
                  label="Account Number"
                  variant="filled"
                  fullWidth
                  required
                  value={formData.accNum}
                  onChange={(e) =>
                    setFormData({ ...formData, accNum: e.target.value })
                  }
                />

                <TextField
                  margin="dense"
                  label="IFSC Code"
                  variant="filled"
                  fullWidth
                  required
                  value={formData.ifsc}
                  onChange={(e) =>
                    setFormData({ ...formData, ifsc: e.target.value })
                  }
                />

                <TextField
                  margin="dense"
                  label="Account Holder Name"
                  variant="filled"
                  fullWidth
                  required
                />

                <TextField
                  margin="dense"
                  label="Branch"
                  variant="filled"
                  fullWidth
                  required
                  value={formData.branch}
                  onChange={(e) =>
                    setFormData({ ...formData, branch: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Typography variant="h6" fontWeight={"bold"}>
                  Proofs
                </Typography>

                <TextField
                  margin="dense"
                  label="PAN Number"
                  variant="filled"
                  fullWidth
                  required
                  value={formData.panNum}
                  onChange={(e) =>
                    setFormData({ ...formData, panNum: e.target.value })
                  }
                />

                <TextField
                  margin="dense"
                  label="Aadhar Number "
                  variant="filled"
                  fullWidth
                  required
                  value={formData.aadharNum}
                  onChange={(e) =>
                    setFormData({ ...formData, aadharNum: e.target.value })
                  }
                />

                <Typography variant="h6" fontWeight={"bold"} pt={1} pb={1}>
                  Document
                </Typography>

                <FormControl variant="filled" fullWidth required>
                  <InputLabel>Highest Qualification</InputLabel>
                  <Select label="Highest Qualification">
                    <MenuItem value="bachelor">Bachelor's Degree</MenuItem>
                    <MenuItem value="master">Master's Degree</MenuItem>
                    <MenuItem value="phd">Ph.D.</MenuItem>
                  </Select>
                </FormControl>

                <ImgUploadPopup />
              </Box>
            </Box>

            <Box maxWidth={1500} padding={3}>
              <DeclarationSection />
            </Box>
          </>
        );

      case 3:
        return (
          // <>
          //   <Typography variant="h6">Review Details:</Typography>
          //   <Typography>First Name : {formData.firstName}</Typography>
          //   <Typography>Last Name : {formData.lastName}</Typography>
          //   <Typography>Date of Birth : {formData.dob}</Typography>
          //   <Typography>Gender : </Typography>
          //   <Typography>Father's Name : {formData.FatherName}</Typography>
          //   <Typography>Email ID : {formData.email}</Typography>
          //   <Typography>Phone Number : {formData.phno}</Typography>
          //   <Typography>Qualifiication : </Typography>
          //   <Typography>Specialization : {formData.email}</Typography>
          //   <Typography>Bank Name : {formData.bankName}</Typography>
          //   <Typography>Account Number : {formData.accNum}</Typography>
          //   <Typography>IFSC code : {formData.ifsc}</Typography>
          //   <Typography>Branch : {formData.branch}</Typography>
          // </>

          <>
         
  <Box p={3} >
    <Typography variant="h5" fontWeight="bold" gutterBottom pb={2} >
      Review Your Details
    </Typography>

    <Box
    paddingLeft={10}
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-evenly"
      
      
    >
      {/* Left Column */}
      <Stack spacing={2} flex={1}>
        <Box>
          <Typography variant="h6" fontWeight="bold" pb={1}>Personal Information</Typography>
          <Box pl={2}>
          <Typography>First Name: {formData.firstName}</Typography>
          <Typography>Last Name: {formData.lastName}</Typography>
          <Typography>Date of Birth: {formData.dob}</Typography>
          <Typography>Gender: {formData.gender}</Typography></Box>
        </Box>

        {/* <Box>
          <Typography variant="subtitle2" fontWeight="medium">Address</Typography>
          <Typography>Address 1: {formData.address1}</Typography>
          <Typography>Address 2: {formData.address2}</Typography>
          <Typography>City: {formData.city}</Typography>
          <Typography>State: {formData.state}</Typography>
          <Typography>Pin Code: {formData.pincode}</Typography>
        </Box> */}

        <Box>
          <Typography variant="h6" fontWeight="bold" pb={1}>Proof Details</Typography>
          <Box pl={2}>
          <Typography>PAN Number: {formData.panNum}</Typography>
          <Typography>Aadhar Number: {formData.aadharNum}</Typography></Box>
        </Box>
      </Stack>

      {/* Right Column */}
      <Stack spacing={2} flex={1}>
        <Box>
          <Typography variant="h6"  fontWeight="bold" pb={1}>Contact Information</Typography>
          <Box pl={2}>
          <Typography>Email: {formData.email}</Typography>
          <Typography>Phone: {formData.phno}</Typography></Box>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="bold" pb={1}>Bank Information</Typography>
          <Box pl={2}>
          <Typography>Bank Name: {formData.bankName}</Typography>
          <Typography>Account Number: {formData.accNum}</Typography>
          <Typography>IFSC Code: {formData.ifsc}</Typography></Box>
          {/* <Typography>Account Holder: {formData.ac}</Typography> */}
        </Box>

        {formData.uploadedIdPreview && (
          <Box>
            <Typography variant="subtitle2" fontWeight="medium">Uploaded Document</Typography>
            <Box
              component="img"
              src={formData.uploadedIdPreview}
              alt="ID Document"
              sx={{ width: '100%', maxWidth: 300, borderRadius: 2, mt: 1 }}
            />
          </Box>
        )}
      </Stack>
    </Box>
  </Box>


          </>
        );

      default:
        return "Unknown step";
    }
  };

  return (
    <Box justifyContent={"center"} minHeight={100 + "vh"} display={"flex"}>
      <Box sx={{ width: "85%" }}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
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
