import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";

export default function UploadField() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [uploadType, setUploadType] = useState<"photo" | "id" | null>(null);

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenDialog = (type: "photo" | "id") => {
    setUploadType(type);
    setPopupOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (uploadType === "photo") {
        setPhotoFile(file);
      } else if (uploadType === "id") {
        setIdFile(file);
      }
    }
  };

  const handleUpload = () => {
    setSnackbarOpen(true);
    setPopupOpen(false);
  };

  return (
    <>
      {/* Upload Photo */}
      <Box display="flex" alignItems="center" gap={2} sx={{ mt: 2 }}>
        <TextField
          label="Upload Photo"
          variant="filled"
          fullWidth
          value={photoFile ? photoFile.name : ""}
          InputProps={{ readOnly: true }}
        />
        <Button variant="contained" onClick={() => handleOpenDialog("photo")}
          sx={{
            borderRadius: 2,
            color: "white",
            backgroundColor: "#384040",
            borderColor: "black",
            transition: "background-color 0.3s ease-in-out", // Transition background color
            "&:hover": {
              backgroundColor: "transparent", // Background color on hover
              color: "black",
            },
          }}
          >
          Upload
        </Button>
      </Box>

      {/* Upload Govt ID */}
      <Box display="flex" alignItems="center" gap={2} sx={{ mt: 2 }}>
        <TextField
          label="Upload Govt ID Proof"
          variant="filled"
          fullWidth
          value={idFile ? idFile.name : ""}
          InputProps={{ readOnly: true }}
        />
        <Button variant="outlined"  onClick={() => handleOpenDialog("id")}
          sx={{
            borderRadius: 2,
            color: "white",
            backgroundColor: "#384040",
            borderColor: "black",
            transition: "background-color 0.3s ease-in-out", // Transition background color
            "&:hover": {
              backgroundColor: "transparent", // Background color on hover
              color: "black",
            },
          }}
          >
          Upload
        </Button>
      </Box>

      {/* Upload Dialog */}
      <Dialog
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        fullWidth
        maxWidth="sm">
        <DialogTitle>
          Upload {uploadType === "photo" ? "Profile Photo" : "Government ID"}
        </DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept={uploadType === "photo" ? "image/*" : "image/*,.pdf"}
            onChange={handleFileChange}
            style={{ marginTop: "1rem" }}
          />
          {(uploadType === "photo" && photoFile) ||
          (uploadType === "id" && idFile) ? (
            <Typography variant="body2" sx={{ mt: 2 }}>
              Selected:{" "}
              <strong>
                {uploadType === "photo" ? photoFile?.name : idFile?.name}
              </strong>
            </Typography>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPopupOpen(false)}
            sx={{
              borderRadius: 2,
              color: "black",
              backgroundColor: "transparent",
              borderColor: "white",
              transition: "background-color 0.3s ease-in-out", // Transition background color
              "&:hover": {
                backgroundColor: "rgb(197,116,116)", // Background color on hover
                color: "white",
              },
            }}
            >Cancel</Button>
          <Button onClick={handleUpload} variant="contained"
          sx={{
            borderRadius: 2,
            color: "white",
            backgroundColor: "#384080",
            borderColor: "black",
            transition: "background-color 0.3s ease-in-out", // Transition background color
            "&:hover": {
              backgroundColor: "transparent", // Background color on hover
              color: "black",
            },
          }}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSnackbarOpen(false)}>
          Document uploaded successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
