// // import React, { useState } from 'react';
// // import {
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Button,
// //   IconButton,
// //   Box
// // } from '@mui/material';

// // export default function ImageUploadPopup() {
// //   const [open, setOpen] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [preview, setPreview] = useState(null);

// //   const handleFileChange = (e: { target: { files: any[]; }; }) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setSelectedImage(file);
// //     //   setPreview(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleUpload = () => {
// //     // handle upload logic here (e.g., send to backend)
// //     console.log('Uploading:', selectedImage);
// //     setOpen(false);
// //   };

// //   return (
// //     <div>
// //       <Button variant="contained" onClick={() => setOpen(true)}>
// //         Upload Image
// //       </Button>

// //       <Dialog open={open} onClose={() => setOpen(false)}>
// //         <DialogTitle>Upload Image</DialogTitle>
// //         <DialogContent>
// //           <Box
// //             component="label"
// //             htmlFor="upload-button"
// //             sx={{
// //               display: 'flex',
// //               flexDirection: 'column',
// //               alignItems: 'center',
// //               gap: 2,
// //               mt: 2
// //             }}
// //           >
// //             {preview && (
// //               <img
// //                 src={preview}
// //                 alt="Preview"
// //                 style={{ width: 200, height: 'auto', borderRadius: 8 }}
// //               />
// //             )}
// //             <input
// //               accept="image/*"
// //               id="upload-button"
// //               type="file"
// //               hidden
// //               onChange={handleFileChange}
// //             />
// //             <Button variant="outlined" component="span">
// //               Choose File
// //             </Button>
// //           </Box>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setOpen(false)}>Cancel</Button>
// //           <Button variant="contained" onClick={handleUpload} disabled={!selectedImage}>
// //             Upload
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }







// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Box,
//   Snackbar,
//   Typography,
//   Alert
// } from '@mui/material';

// export default function DocumentUploadPopup() {
//   const [open, setOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploaded'>('idle');

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//       setUploadStatus('idle');

//       if (file.type.startsWith('image/')) {
//         setPreview(URL.createObjectURL(file));
//       } else {
//         setPreview(null);
//       }
//     }
//   };

//   const handleUpload = () => {
//     if (!selectedFile) return;
//     console.log('Uploading:', selectedFile);

//     setSnackbarOpen(true);
//     setUploadStatus('uploaded');
//   };

//   const handleCancelUpload = () => {
//     setSelectedFile(null);
//     setUploadStatus('idle');
//     setPreview(null);
//   };

//   const handleDialogClose = () => {
//     setOpen(false);
//     setSelectedFile(null);
//     setUploadStatus('idle');
//     setPreview(null);
//   };

//   const handleSnackbarClose = (
//     event?: React.SyntheticEvent | Event,
//     reason?: string
//   ) => {
//     if (reason === 'clickaway') return;
//     setSnackbarOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={() => setOpen(true)}>
//         Upload ID Proof
//       </Button>

//       <Dialog open={open} onClose={handleDialogClose} maxWidth="xs" fullWidth>
//         <DialogTitle>Upload Government ID</DialogTitle>
//         <DialogContent>
//           <Box
//             component="label"
//             htmlFor="upload-button"
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               gap: 2,
//               mt: 2,
//               cursor: 'pointer',
//               textAlign: 'center',
//             }}
//           >
//             {preview && (
//               <img
//                 src={preview}
//                 alt="Preview"
//                 style={{ width: 200, height: 'auto', borderRadius: 8 }}
//               />
//             )}

//             <input
//               accept="image/*,.pdf"
//               id="upload-button"
//               type="file"
//               hidden
//               onChange={handleFileChange}
//             />

//             <Button variant="outlined" component="span">
//               Choose File
//             </Button>

//             {selectedFile && (
//               <Typography variant="body2" color="textSecondary">
//                 Selected: {selectedFile.name}
//               </Typography>
//             )}

//             {uploadStatus === 'uploaded' && (
//               <Box textAlign="center">
//                 <Typography
//                   variant="subtitle2"
//                   color="success.main"
//                   sx={{ mt: 1 }}
//                 >
//                   ✅ File uploaded successfully!
//                 </Typography>
//                 <Button
//                   size="small"
//                   color="error"
//                   sx={{ mt: 1 }}
//                   onClick={handleCancelUpload}
//                 >
//                   Cancel Upload
//                 </Button>
//               </Box>
//             )}
//           </Box>
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={handleDialogClose}>Close</Button>
//           <Button
//             variant="contained"
//             onClick={handleUpload}
//             disabled={!selectedFile || uploadStatus === 'uploaded'}
//           >
//             Upload
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
//           File uploaded successfully!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }



















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
  TextField,
} from '@mui/material';

export default function ImgUploadPopup() {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploaded'>('idle');
  const [uploadedFilePath, setUploadedFilePath] = useState<string>(''); // <- new for TextField

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('idle');

      if (file.type.startsWith('image/')) {
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
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

    const pathOrName =
      selectedFile.type.startsWith('image/')
        ? URL.createObjectURL(selectedFile)
        : selectedFile.name;

    setUploadedFilePath(pathOrName); // <- update TextField
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    setUploadStatus('idle');
    setPreview(null);
    setUploadedFilePath('');
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedFile(null);
    setUploadStatus('idle');
    setPreview(null);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {/* TextField that shows the uploaded file path or name */}
      <TextField
        label="Uploaded File"
        variant="filled"
        margin='dense'
        value={uploadedFilePath}
        
        fullWidth
      />

      {/* Button that triggers the popup */}
      <Box >
      <Button  onClick={() => setOpen(true)}>
        Upload 
      </Button></Box>

      {/* Upload Dialog */}
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

            {selectedFile && (
              <Typography variant="body2" color="textSecondary">
                Selected: {selectedFile.name}
              </Typography>
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

      {/* Success Snackbar */}
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
