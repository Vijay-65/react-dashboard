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
  Alert,
  Snackbar,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
    uploadedIdPreview: "",
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
    

  if (activeStep === steps.length - 1) {
      setShowSuccess(true); // 🎉 Just show the popup
      return;
    }
  
    const newActiveStep =
      isLastStep() && !completed[activeStep]
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
  
    setActiveStep(newActiveStep);
  
    
  };
  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [submitted, setSubmitted] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  

 

  const handleReset = () => {
    setActiveStep(0);
    
      setCompleted({});
      setSubmitted(false);
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

            
          </>
        );

      case 3:
        return (
          <>
            <Box p={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom pb={2}>
                Review Your Details
              </Typography>

              <Box
                paddingLeft={10}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-evenly">
                {/* Left Column */}
                <Stack spacing={2} flex={1}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" pb={1}>
                      Personal Information
                    </Typography>
                    <Box pl={2}>
                      <Typography>First Name: {formData.firstName}</Typography>
                      <Typography>Last Name: {formData.lastName}</Typography>
                      <Typography>Date of Birth: {formData.dob}</Typography>
                      <Typography>Gender: {formData.gender}</Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight="bold" pb={1}>
                      Proof Details
                    </Typography>
                    <Box pl={2}>
                      <Typography>PAN Number: {formData.panNum}</Typography>
                      <Typography>
                        Aadhar Number: {formData.aadharNum}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>

                {/* Right Column */}
                <Stack spacing={2} flex={1}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" pb={1}>
                      Contact Information
                    </Typography>
                    <Box pl={2}>
                      <Typography>Email: {formData.email}</Typography>
                      <Typography>Phone: {formData.phno}</Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight="bold" pb={1}>
                      Bank Information
                    </Typography>
                    <Box pl={2}>
                      <Typography>Bank Name: {formData.bankName}</Typography>
                      <Typography>Account Number: {formData.accNum}</Typography>
                      <Typography>IFSC Code: {formData.ifsc}</Typography>
                    </Box>
                    {/* <Typography>Account Holder: {formData.ac}</Typography> */}
                  </Box>

                  {formData.uploadedIdPreview && (
                    <Box>
                      <Typography variant="subtitle2" fontWeight="medium">
                        Uploaded Document
                      </Typography>
                      <Box
                        component="img"
                        src={formData.uploadedIdPreview}
                        alt="ID Document"
                        sx={{
                          width: "100%",
                          maxWidth: 300,
                          borderRadius: 2,
                          mt: 1,
                        }}
                      />
                    </Box>
                  )}
                </Stack>
              </Box>

              <Box maxWidth={1500} padding={3}>
              <DeclarationSection />
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
        {/* <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper> */}

{/* <Stepper activeStep={activeStep} alternativeLabel>
  <Step completed={completed[0]}>
    <StepLabel icon={<PersonIcon />}>Basic Info</StepLabel>
  </Step>
  <Step completed={completed[1]}>
    <StepLabel icon={<SchoolIcon />}>Education</StepLabel>
  </Step>
  <Step completed={completed[2]}>
    <StepLabel icon={<AccountBalanceIcon />}>Bank Info</StepLabel>
  </Step>
  <Step completed={completed[3]}>
    <StepLabel icon={<CheckCircleIcon />}>Review</StepLabel>
  </Step>
</Stepper> */}


{/* <Stepper activeStep={activeStep} alternativeLabel>
  {steps.map((label, index) => (
    <Step key={label} completed={completed[index]}>
      <StepLabel
        icon={
          index === 0 ? <PersonIcon /> :
          index === 1 ? <SchoolIcon /> :
          index === 2 ? <AccountBalanceIcon /> :
          <CheckCircleIcon />
        }
        onClick={() => setActiveStep(index)} // 👈 This restores click
        sx={{ cursor: 'pointer' }}           // 👈 Cursor pointer for UX
      >
        {label}
      </StepLabel>
    </Step>
  ))}
</Stepper> */}


<Stepper activeStep={activeStep} alternativeLabel>
  {steps.map((label, index) => {
    const isActive = activeStep === index;
    const isCompleted = completed[index];

    const iconStyle = {
      color: isActive
        ? '#43cea2' // Active color
        : isCompleted
        ? '#185a9d' // Completed color
        : '#ccc',   // Default gray
      fontSize: 30,
    };

    return (
      <Step key={label} completed={isCompleted}>
        <StepLabel
          icon={
            index === 0 ? <PersonIcon sx={iconStyle} /> :
            index === 1 ? <SchoolIcon sx={iconStyle} /> :
            index === 2 ? <AccountBalanceIcon sx={iconStyle} /> :
            <CheckCircleIcon sx={iconStyle} />
          }
          onClick={() => setActiveStep(index)}
          sx={{
            cursor: 'pointer',
            '& .MuiStepLabel-label': {
              color: isActive ? '#43cea2' : isCompleted ? '#185a9d' : '#999',
              fontWeight: isActive ? 'bold' : 'normal',
            }
          }}
        >
          {label}
        </StepLabel>
      </Step>
    );
  })}
</Stepper>

        

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - your data is submitted!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                sx={{
                  textTransform: "none",
                  px: 4,
                  py: 1,
                  borderRadius: "8px",
                  background:
                    "linear-gradient(90deg,rgb(197, 160, 118),rgb(212, 137, 62))", // Soft red gradient
                  color: "white",
                  fontWeight: "bold",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 12px rgba(16, 14, 14, 0.2)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(213, 191, 47, 0.4)", // Slightly different hover effect color
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                  },
                }}
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}>
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={handleNext} 
                sx={{
                  textTransform: "none",
                  px: 4,
                  py: 1,
                  borderRadius: "8px",
                  background: "linear-gradient(90deg, #43cea2, #185a9d)",
                  color: "white",
                  fontWeight: "bold",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(24, 90, 157, 0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                  },
                }}>
                {activeStep === steps.length-1 ? "Submit" : "Next"}

              </Button>
              
            </Box>
            
              <Snackbar
                  open={showSuccess}
                  autoHideDuration={3000}
                  onClose={() => setShowSuccess(false)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                  <Alert
                    onClose={() => setShowSuccess(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    🎉 Form submitted successfully!
                  </Alert>
                </Snackbar>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
