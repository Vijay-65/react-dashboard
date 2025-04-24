import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import motologo from "../assets/Highmark-Stadium-New-York-Logo (1).png";
import LockIcon from "@mui/icons-material/Lock";

import img from "../assets/pexels-photo-2246476.jpeg";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";


const SignUp = () => {
  // fro password, we changing the state of icons
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Its for navigate to signup page when cli
  const navigate = useNavigate();

  return (
    <>
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
        }}>
        {/* Background Overlay for Opacity */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.0)", // 50% black overlay
            zIndex: 1,
          }}
        />

        {/* Signup Form Content */}
        <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
          <Container style={{ maxWidth: 1000 }}>
            <Paper
              elevation={3}
              sx={{
                padding: 6,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: 4,

                // for glassmorphism
                backgroundColor: "rgba(255, 255, 255, 0.92)", // semi-transparent white
                backdropFilter: "blur(1px)", // glass blur effect

                border: "1px solid rgba(255, 255, 255, 0.61)", // soft border
                borderRadius: 3,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              }}>
              <Box
                textAlign="center"
                maxWidth={700}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}>
                <img
                  src={motologo}
                  alt="Moto Logo"
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    paddingBottom: "100px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Box>
              <Box flexGrow={1}></Box>

              <Box
                maxWidth={400}
                textAlign={"center"}
                sx={{
                  alignContent: "center",
                  width: "100%",
                }}>
                <Typography variant="h5" mt={2}>
                  Sign up
                </Typography>

                {/* First Name */}
                <TextField
                  label="First Name"
                  placeholder="Enter First Name"
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

                {/* Last Name */}
                <TextField
                  label="Last Name"
                  placeholder="Enter Last Name"
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

                {/* Email ID */}
                <TextField
                  label="Email ID"
                  placeholder="Enter Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  color="primary"
                  required
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                {/* Mobile Number */}
                <TextField
                  label="Mobile Number"
                  placeholder="Enter Mobile Number"
                  type="tel"
                  fullWidth
                  margin="normal"
                  color="primary"
                  required
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
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

                {/* Password Field with Toggle */}
                <TextField
                  label="Password"
                  placeholder="Confirm Password"
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

                {/* Login Button + Register Link */}
                <Typography variant="body2" align="center" mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 1, minWidth: 100 }}
                    component={Link}
                    to="/dashboard">
                    Sign In
                  </Button>
                  <br />
                  
                </Typography>

                <Box mt={2} display="flex" justifyContent="center" gap={2}>
                  {/* Google Login */}
                  <IconButton>
                    
                    {/*onClick={handleGoogleLogin}> */}
                    <GoogleIcon />
                  </IconButton>

                  {/* Facebook Login */}
                  <IconButton>
                    
                    {/* onClick={handleFacebookLogin}>  */}
                    <FacebookIcon />
                  </IconButton>

                  {/* Twitter Login */}
                  <IconButton>
                  
                    {/* onClick={handleTwitterLogin}>  */}
                    <TwitterIcon />
                  </IconButton>
                </Box>
                <br />
                  Have an account?{" "}
                  <Link to="/"  style={{ textDecoration: "none" }} onClick={()=>navigate("/")}>
                    Login
                  </Link>

              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
