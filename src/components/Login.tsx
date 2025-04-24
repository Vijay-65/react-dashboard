import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Login.css"; // Add your background styles here
import Img from "../assets/pexels-photo-2246476.jpeg";
import motologo from "../assets/Highmark-Stadium-New-York-Logo (1).png";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // fro password, we changing the state of icons
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // It's for Checking the Email and Password..
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {

    // Simple validation logic for demonstration
    if (!email || !password) {
      toast.error("Please fill in both fields.", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });
      return;
    }

    if (email === "admin" && password === "admin") {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => navigate("/dashboard"), // Navigate after toast closes
      });
    } else {
      toast.error("Invalid credentials.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  

  return (
    <> 
    <ToastContainer/>
      

      <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
        <Grid container sx={{ minHeight: "100vh" }}>
          {/* Left side - Login Form */}
          <Grid
            size={5}
            sx={{
              width: {
                xs: "100%", // Full width on small screens
                lg: "41.6667%",
                // md: "41.6667%",// 5/12 on medium and larger
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 4,
              flexDirection: "column",
              minWidth: 440,
            }}>
            <Container maxWidth="sm">
              <Paper
                elevation={2}
                sx={{ padding: 9, borderColor: "lightblue" }}>
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
                    Welcome Back!
                  </Typography>
                </Box>
                <TextField
                  label="Email"
                  placeholder="Enter Email"
                  fullWidth
                  margin="normal"
                  color="primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                            {showPassword ? <Visibility /> : <VisibilityOff />}
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
                    // component={Link}
                    // to="/dashboard">
                    onClick={handleLogin}>
                    {" "}
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

          {/* ----------------------------------Right side - Image --------------------------------------------*/}
          <Grid
            size={7}
            sx={{
              width: {
                xs: "100%", // Full width on small screens
                // md: "58.3333%", // 7/12 on medium and larger
                lg: "58.3333%",
                sm: "100",
              },
              minHeight: "100vh",
            }}>
            <Box
              position="relative"
              width="100%"
              height="100%"
              sx={{
                flexBasis: {
                  xs: "100%", // Stack vertically on small screens
                  md: "50%", // Half screen on medium and up
                },
                width: {
                  xs: "100%",
                  md: "auto",
                },
                display: {
                  xs: "block", // Hide on small screens
                  md: "block",
                },
                minHeight: "100vh",
              }}>
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${Img})`,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
