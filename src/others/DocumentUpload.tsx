import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Snackbar,
  Typography,
  Alert,
  TextField
} from '@mui/material';

export default function DocumentUploadPopup() {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploaded'>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('idle');

      if (file.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    console.log('Uploading:', selectedFile);
    setSnackbarOpen(true);
    setUploadStatus('uploaded');
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    setUploadStatus('idle');
    setPreview(null);
  };

  const handleDialogClose = () => {
    setOpen(false);
    handleCancelUpload();
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Upload ID Proof
      </Button>

      <Dialog open={open} onClose={handleDialogClose} maxWidth="xs" fullWidth>
        <DialogTitle>Upload Government ID</DialogTitle>
        <DialogContent>
          <Box
            component="label"
            htmlFor="upload-button"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              mt: 2,
              cursor: 'pointer',
              textAlign: 'center',
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
              accept="image/*,.pdf"
              id="upload-button"
              type="file"
              hidden
              onChange={handleFileChange}
            />

            <Button variant="outlined" component="span">
              Choose File
            </Button>

            {/* File name in read-only TextField */}
            {selectedFile && (
              <TextField
                label="Uploaded File"
                value={selectedFile.name}
                fullWidth
                margin="dense"
                InputProps={{
                  readOnly: true,
                }}
              />
            )}

            {uploadStatus === 'uploaded' && (
              <Box textAlign="center">
                <Typography
                  variant="subtitle2"
                  color="success.main"
                  sx={{ mt: 1 }}
                >
                  ✅ File uploaded successfully!
                </Typography>
                <Button
                  size="small"
                  color="error"
                  sx={{ mt: 1 }}
                  onClick={handleCancelUpload}
                >
                  Cancel Upload
                </Button>
              </Box>
            )}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={!selectedFile || uploadStatus === 'uploaded'}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
          File uploaded successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
