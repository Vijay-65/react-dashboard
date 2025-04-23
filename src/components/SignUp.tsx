import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Grid, Container, Paper, Typography, TextField, InputAdornment, IconButton, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import motologo from "../assets/Highmark-Stadium-New-York-Logo (1).png";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from '@mui/icons-material/Person';
import img from '../assets/pexels-photo-2246476.jpeg'


const SignUp = () => {


     // fro password, we changing the state of icons
    const [showPassword, setShowPassword] = useState(false);
    
    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };




  return (
    <>
      {/* <h1>Signup..</h1> */}
      {/* <Box  
      sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${Img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
        }}>
      <Grid container sx={{ minHeight: "100vh" }}>
        
        
        <Grid sx={{    // SignIn Form
            width: "100%", // Full width
          }}>

          <Container maxWidth="sm" >
            <Paper elevation={2} sx={{ padding: 9 , borderColor:'lightblue' }}>
              <Box textAlign="center" mb={3}>
                <img
                  src={motologo}
                  alt="Moto Logo"
                  style={{
                    width: "100%", // This will change based on the screen size
                    maxWidth: "600px", // Ensure it doesn't get too big
                    height: "auto", // Maintain aspect ratio
                    paddingBottom: "20px", // Optional: Adjust spacing
                    display: "block", // Make sure it's centered
                    margin: "0 auto", // Center the image horizontally
                  }}
                />

                <Typography variant="h5" mt={2}>
                  Welcome User!
                </Typography>
              </Box>

              <TextField
              
                label="Username"
                placeholder="Enter Username"
                fullWidth
                margin="normal"
                color="primary"
                required
                slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
              />
              <TextField
                label="Password"
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"} // ✅ THIS is the key line!
                fullWidth
                margin="normal"
                color="primary"
                required
                slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ?  <Visibility /> : <VisibilityOff /> }
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                
              />

              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked color="primary" />}
                  label="Remember me"
                />
                <Typography
                  variant="body2"
                  component={Link}
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}>
                  Forgot password?
                </Typography>
              </FormGroup>

              <Typography variant="body2" align="center" mt={2}>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1, minWidth: 100 }}
                  component={Link}
                  to="/dashboard">
                  Login
                </Button>
                <br />
                <br />
                Don&apos;t have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </Typography>
            </Paper>
          </Container>
        </Grid>

      </Grid>
    </Box> */}


<Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Background Overlay for Opacity */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% black overlay
            zIndex: 1,
          }}
        />

        {/* Signup Form Content */}
        <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
          <Container style={{maxWidth:530}} >
            <Paper elevation={3} sx={{ padding: 6 }}>
              <Box textAlign="center" mb={3}>
                <img
                  src={motologo}
                  alt="Moto Logo"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    paddingBottom: "20px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <Typography variant="h5" mt={2}>
                  Welcome User!
                </Typography>
              </Box>

              {/* Username Field */}
              <TextField
                label="Username"
                placeholder="Enter Username"
                fullWidth
                margin="normal"
                color="primary"
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              {/* Password Field with Toggle */}
              <TextField
                label="Password"
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                color="primary"
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              {/* Remember Me & Forgot Password */}
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked color="primary" />}
                  label="Remember me"
                />
                <Typography
                  variant="body2"
                  component={Link}
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Forgot password?
                </Typography>
              </FormGroup>

              {/* Login Button + Register Link */}
              <Typography variant="body2" align="center" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1, minWidth: 100 }}
                  component={Link}
                  to="/dashboard"
                >
                  Login
                </Button>
                <br />
                <br />
                Don&apos;t have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </Typography>
            </Paper>
          </Container>
        </Box>
      </Box>


    </>
  );
};

export default SignUp;
