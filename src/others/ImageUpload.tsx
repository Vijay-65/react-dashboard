import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box
} from '@mui/material';

export default function ImageUploadPopup() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    //   setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    // handle upload logic here (e.g., send to backend)
    console.log('Uploading:', selectedImage);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Upload Image
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          <Box
            component="label"
            htmlFor="upload-button"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              mt: 2
            }}
          >
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{ width: 200, height: 'auto', borderRadius: 8 }}
              />
            )}
            <input
              accept="image/*"
              id="upload-button"
              type="file"
              hidden
              onChange={handleFileChange}
            />
            <Button variant="outlined" component="span">
              Choose File
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpload} disabled={!selectedImage}>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
