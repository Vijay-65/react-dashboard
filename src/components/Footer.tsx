import { Box, Typography } from "@mui/material";

  const Footer = () => (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'lightsalmon',
        color: 'white',
        textAlign: 'center',
        py: 2,
        // mt: 'auto',
        bottom:0
      }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} AirBnDash | Crafted with ❤️
      </Typography>
    </Box>
  );
  
  export default Footer