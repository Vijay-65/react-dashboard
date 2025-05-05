
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Box } from '@mui/material';
import selfPopupImg from '../assets/SelfPopup.png'
import CloseIcon from '@mui/icons-material/Close';

export default function SelfPopup() {
  const [open, setOpen] = React.useState(false);

  // Auto-open dialog using a self-invoking function inside useEffect
  React.useEffect(() => {
    (function autoOpen() {
      setOpen(true);
    })();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      {/* Container for image and close button */}
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        {/* Image */}
        <Box
          component="img"
          src={selfPopupImg} // Replace with your actual offer image
          alt="Offer"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        
        {/* Close Button Over the Image */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better visibility
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker on hover
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogContent>
    </Dialog>




    </React.Fragment>
  );
}
