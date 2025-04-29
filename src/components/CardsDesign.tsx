// import { Typography } from '@mui/material'
// import React from 'react'

// const CardsDesign = () => {
//   return (
//     <>
//     <h2>Its a Card design </h2>
//     <Typography sx={{ marginBottom: 2 }}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
//         non enim praesent elementum facilisis leo vel. Risus at ultrices mi
//         tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
//         tellus. Convallis convallis tellus id interdum velit laoreet id donec
//         ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
//         suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
//         quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
//         proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
//         tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
//         varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
//         Lorem donec massa sapien faucibus et molestie ac.
//       </Typography>








//   </>
//   )
// }

// export default CardsDesign


import {
  
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    
    Grid,
    IconButton,
    Paper,
    styled,
    Tooltip,
    Typography,
  } from "@mui/material";
  
  import ListAltIcon from "@mui/icons-material/ListAlt";
  import "../styles/CardDesign.css";
  import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
  
  import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
  import EditDocumentIcon from "@mui/icons-material/EditDocument";
  import LocalActivityIcon from "@mui/icons-material/LocalActivity";
  import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  
  const buttonStyle = {
    position: "relative",
    color: "black",
    backgroundColor: "white",
    borderRadius: "50%", // Circular shape
    padding: "20px", // Size of the button
    transition: "box-shadow 0.6s ease-in-out, color 0.5s ease-in-out", // Smooth hover transition
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    fontSize: "24px", // Icon size
    "&:hover": {
      color: "white",
      backgroundColor: "rgba(38, 33, 33, 0.98)", // Make text transparent but keep icon visible
      transform: "scale(1.0)", // Apply the shadow effect on hover
      boxShadow: "0 0px 20px rgba(38, 33, 33, 0.98)", // Enhanced shadow on hover
    },
    "&:hover .arrow-icon": {
      color: "black", // Ensure the icon color stays visible on hover
    },
  };
  
  const CardsDesign = () => {
    return (
      <>
      <Typography variant="h4" component={"div"} align="center" padding={3} fontWeight={"bold"}>
        Welcome to 2nd Dashboard design using "Cards"
      </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              size={{
                md: 8,
                lg: 12,
              }}
              gap={4}
              justifyContent={"center"}
              sx={{
                display: {
                  md: "flex",
                  sm: "row",
                },
              }}>
              <Item
                style={{
                  borderRadius: 4,
                }}>
                <Box>
                  <Card
                    sx={{
                      maxWidth: 345,
                      minHeight: 450,
                      alignContent: "start",
                      padding: 4,
                      border: "1px solid rgb(148, 32, 32)",
                      position: "relative",
                      transition: "background-color 0.3s ease-in-out", // Transition background color
                      "&:hover": {
                        backgroundColor: "lightblue", // Background color on hover
                      },
                    }}>
                    <CardContent
                      style={{
                        justifyItems: "left",
                      }}>
                      <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              maxWidth: "80px", // Set width
                              maxHeight: "80px", // Set height
                              minWidth: "80px", // Set width
                              minHeight: "80px", // Set height
                              borderRadius: "20%", // Optional: to make it circular
                              backgroundColor: "lightgray", // Optional: background color
                              overflow: "hidden", // Ensures the icon stays inside the circle
                            }}>
                            <ListAltIcon
                              style={{
                                fontSize: "50px", // Icon size
                                color: "lightblue", // Icon color
                              }}
                            />
                          </div>
                        </IconButton>
                      </Tooltip>
  
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{
                          paddingTop: 20,
                          fontSize: 32,
                          fontWeight: "bold", // Makes the font bold
                          fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
                        }}>
                        Members
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        style={{
                          fontSize: 20,
                          // Makes the font bold
                          fontFamily: '"Tagesschrift", sans-serif', // Change font family (example: Roboto)
                          textAlign: "left",
                        }}>
                        Here you can Add, View Update and Manage your price List
                        and utilities and other.
                      </Typography>
                    </CardContent>
  
                    <CardContent sx={{ flexGrow: 1 }}></CardContent>
                    <CardActions
                      style={{
                        justifyContent: "end",
                      }}>
                      <Button size="large" sx={buttonStyle}>
                        <ArrowForwardIcon />
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Item>
  
              {/* ------------------------------- Second card ------------------------------- */}
              <Item
                style={{
                  borderRadius: 4,
                }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    minHeight: 450,
                    alignContent: "start",
                    padding: 4,
                    border: "1px solid rgb(48, 45, 45)",
                    position: "relative",
                    transition: "background-color 0.3s ease-in-out", // Transition background color
                    "&:hover": {
                      backgroundColor: "olive", // Background color on hover
                    },
                  }}>
                  <CardContent
                    style={{
                      justifyItems: "left",
                    }}>
                    <Tooltip title="Open settings">
                      <IconButton sx={{ p: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: "80px", // Set width
                            maxHeight: "80px", // Set height
                            minWidth: "80px", // Set width
                            minHeight: "80px", // Set height
                            borderRadius: "20%", // Optional: to make it circular
                            backgroundColor: "lightgray", // Optional: background color
                            overflow: "hidden", // Ensures the icon stays inside the circle
                          }}>
                          <LocalActivityIcon
                            style={{
                              fontSize: "50px", // Icon size
                              color: "olive", // Icon color
                            }}
                          />
                        </div>
                      </IconButton>
                    </Tooltip>
  
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        paddingTop: 20,
                        fontSize: 32,
                        fontWeight: "bold", // Makes the font bold
                        fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
                      }}>
                      Activities
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      style={{
                        fontSize: 20,
                        // Makes the font bold
                        fontFamily: '"Tagesschrift", sans-serif', // Change font family (example: Roboto)
                        textAlign: "left",
                      }}>
                      Create and Edit the Elements ( Price lists, images,
                      info,tables, icons etc.) that make up slides.
                    </Typography>
                  </CardContent>
                  <CardContent style={{ flexGrow: 1 }}></CardContent>
                  <CardActions
                    style={{
                      justifyContent: "end",
                    }}>
                    <Button size="large" sx={buttonStyle}>
                      <ArrowForwardIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Item>
  
              {/* --------------------------------------- third card --------------------------------------------- */}
              <Item
                style={{
                  borderRadius: 4,
                }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    minHeight: 450,
                    alignContent: "start",
                    padding: 4,
                    border: "1px solid rgb(48, 45, 45)",
                    position: "relative",
                    transition: "background-color 0.3s ease-in-out", // Transition background color
                    "&:hover": {
                      backgroundColor: "lightsalmon", // Background color on hover
                    },
                  }}>
                  <CardContent
                    style={{
                      justifyItems: "left",
                    }}>
                    <Tooltip title="Open settings">
                      <IconButton sx={{ p: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: "80px", // Set width
                            maxHeight: "80px", // Set height
                            minWidth: "80px", // Set width
                            minHeight: "80px", // Set height
                            borderRadius: "20%", // Optional: to make it circular
                            backgroundColor: "lightgray", // Optional: background color
                            overflow: "hidden", // Ensures the icon stays inside the circle
                          }}>
                          <PlaylistAddCheckIcon
                            style={{
                              fontSize: "50px", // Icon size
                              color: "orange", // Icon color
                            }}
                          />
                        </div>
                      </IconButton>
                    </Tooltip>
  
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        paddingTop: 20,
                        fontSize: 32,
                        fontWeight: "bold", // Makes the font bold
                        fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
                      }}>
                      Items
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      style={{
                        fontSize: 20,
                        // Makes the font bold
                        fontFamily: '"Tagesschrift", sans-serif', // Change font family (example: Roboto)
                        textAlign: "left",
                      }}>
                      Create and Edit Sides that are shown on your TV. It inclues
                      Elements, videos, Profiles,etc.
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}></CardContent>
                  <CardActions
                    style={{
                      justifyContent: "end",
                    }}>
                    <Button size="large" sx={buttonStyle}>
                      <ArrowForwardIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Item>
  
              {/* ---------------------------- Fourth card ---------------------------------- */}
              <Item
                style={{
                  borderRadius: 4,
                }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    minHeight: 450,
                    alignContent: "start",
                    padding: 4,
                    border: "1px solid rgb(110, 37, 37)",
                    position: "relative",
                    transition: "background-color 0.3s ease-in-out", // Transition background color
                    "&:hover": {
                      backgroundColor: "rgb(112, 63, 63)", // Background color on hover
                    },
                  }}>
                  <CardContent
                    style={{
                      justifyItems: "left",
                    }}>
                    <Tooltip title="Open settings">
                      <IconButton sx={{ p: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: "80px", // Set width
                            maxHeight: "80px", // Set height
                            minWidth: "80px", // Set width
                            minHeight: "80px", // Set height
                            borderRadius: "20%", // Optional: to make it circular
                            backgroundColor: "lightgray", // Optional: background color
                            overflow: "hidden", // Ensures the icon stays inside the circle
                          }}>
                          <LibraryMusicIcon
                            style={{
                              fontSize: "50px", // Icon size
                              color: "indianred", // Icon color
                            }}
                          />
                        </div>
                      </IconButton>
                    </Tooltip>
  
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        paddingTop: 20,
                        fontSize: 32,
                        fontWeight: "bold", // Makes the font bold
                        fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
                      }}>
                      Playlists
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      style={{
                        fontSize: 20,
                        // Makes the font bold
                        fontFamily: '"Tagesschrift", sans-serif', // Change font family (example: Roboto)
                        textAlign: "left",
                      }}>
                      Here, you can Manage Slides, Videos and all your uploaded
                      content into Playlists.
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}></CardContent>
                  <CardActions
                    style={{
                      justifyContent: "end",
                    }}>
                    <Button size="large" sx={buttonStyle}>
                      <ArrowForwardIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
  
            <Grid
              size={12}
              justifyContent={"center"}
              gap={4}
              paddingBottom={5}
              paddingTop={2}
              sx={{
                display: {
                  md: "flex",
                },
              }}>
              {/* ------------------------------ Fifth card ------------------------------------- */}
              <Box
                display={"flex"}
                gap={3}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                  },
                }}>
                <Box>
                  <Item
                    style={{
                      borderRadius: 4,
                    }}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        minHeight: 450,
                        alignContent: "start",
                        padding: 4,
                        border: "1px solid rgb(48, 45, 45)",
                        position: "relative",
                        transition: "background-color 0.3s ease-in-out", // Transition background color
                        "&:hover": {
                          backgroundColor: "rgb(100, 170, 57)", // Background color on hover
                        },
                      }}>
                      <CardContent
                        style={{
                          justifyItems: "left",
                        }}>
                        <Tooltip title="Open settings">
                          <IconButton sx={{ p: 0 }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: "80px", // Set width
                                maxHeight: "80px", // Set height
                                minWidth: "80px", // Set width
                                minHeight: "80px", // Set height
                                borderRadius: "20%", // Optional: to make it circular
                                backgroundColor: "lightgray", // Optional: background color
                                overflow: "hidden", // Ensures the icon stays inside the circle
                              }}>
                              <OndemandVideoIcon
                                style={{
                                  fontSize: "50px", // Icon size
                                  color: "rgb(110, 197, 52)", // Icon color
                                }}
                              />
                            </div>
                          </IconButton>
                        </Tooltip>
  
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            paddingTop: 20,
                            fontSize: 32,
                            fontWeight: "bold", // Makes the font bold
                            fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
                          }}>
                          Videos
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                          style={{
                            fontSize: 20,
                            // Makes the font bold
                            fontFamily: '"Tagesschrift", sans-serif', // Change font family (example: Roboto)
                            textAlign: "left",
                          }}>
                          Here, You can Add , Edit, view, and Manage Your Videos
                          effectively and easily.
                        </Typography>
                      </CardContent>
                      <CardContent sx={{ flexGrow: 1 }}></CardContent>
  
                      <CardActions
                        style={{
                          justifyContent: "end",
                        }}>
                        <Button size="large" sx={buttonStyle}>
                          <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Item>
                </Box>
  
                {/* -------------------------- Sixth card ---------------------------------- */}
                <Box>
                  <Item
                    style={{
                      borderRadius: 4,
                    }}>
                    <Card
                      sx={{
                        maxWidth: 330,
                        minHeight: 450,
                        alignContent: "start",
                        padding: 4,
                        border: "1px solid rgb(48, 45, 45)",
                        position: "relative",
                        transition: "background-color 0.3s ease-in-out", // Transition background color
                        "&:hover": {
                          backgroundColor: "rgb(88, 66, 127)", // Background color on hover
                        },
                      }}>
                      <CardContent
                        style={{
                          justifyItems: "left",
                        }}>
                        <Tooltip title="Open settings">
                          <IconButton sx={{ p: 0 }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: "80px", // Set width
                                maxHeight: "80px", // Set height
                                minWidth: "80px", // Set width
                                minHeight: "80px", // Set height
                                borderRadius: "20%", // Optional: to make it circular
                                backgroundColor: "lightgray", // Optional: background color
                                overflow: "hidden", // Ensures the icon stays inside the circle
                              }}>
                              <EditDocumentIcon
                                style={{
                                  fontSize: "50px", // Icon size
                                  color: "blueviolet", // Icon color
                                }}
                              />
                            </div>
                          </IconButton>
                        </Tooltip>
  
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            paddingTop: 20,
                            fontSize: 32,
                            fontWeight: "bold", // Makes the font bold
                            fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
                            textAlign: "left",
                          }}>
                          Documents
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                          style={{
                            fontSize: 20,
                            // Makes the font bold
                            fontFamily: '"Tagesschrift", sans-serif', // Change font family (example: Roboto)
                            textAlign: "left",
                          }}>
                          Here, you can view and manage the past and recent
                          Documents based on you activity easily.
                        </Typography>
                      </CardContent>
                      <CardContent sx={{ flexGrow: 1 }}></CardContent>
  
                      <CardActions
                        style={{
                          justifyContent: "end",
                        }}>
                        <Button size="large" sx={buttonStyle}>
                          <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Item>
                </Box>
  
                {/* ------------------------------------------- Seventh card ---------------------------------------- */}
                <Box>
                  <Item
                    style={{
                      borderRadius: 4,
                    }}>
                    <Card
                      sx={{
                        maxWidth: 330,
                        alignContent: "start",
                        padding: 4,
                        border: "1px solid rgb(48, 45, 45)",
                        position: "relative",
                        transition: "background-color 0.3s ease-in-out", // Transition background color
                        "&:hover": {
                          backgroundColor: "rgb(58, 117, 94)", // Background color on hover
                        },
                      }}>
                      <CardContent
                        style={{
                          justifyItems: "left",
                        }}>
                        <Tooltip title="Settings">
                          <IconButton sx={{ p: 0 }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: "80px", // Set width
                                maxHeight: "80px", // Set height
                                minWidth: "80px", // Set width
                                minHeight: "80px", // Set height
                                borderRadius: "20%", // Optional: to make it circular
                                backgroundColor: "lightgray", // Optional: background color
                                overflow: "hidden", // Ensures the icon stays inside the circle
                              }}>
                              <SettingsSuggestIcon
                                style={{
                                  fontSize: "50px", // Icon size
                                  color: "darkcyan", // Icon color
                                }}
                              />
                            </div>
                          </IconButton>
                        </Tooltip>
  
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            paddingTop: 20,
                            fontSize: 32,
                            fontWeight: "bold", // Makes the font bold
                            fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
                          }}>
                          Settings
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                          style={{
                            fontSize: 20,
                            // Makes the font bold
                            fontFamily: '"Tagesschrift", sans-serif', // Change font family (example: Roboto)
                            textAlign: "left",
                          }}>
                          Here, You can Customize and Add and Manage Your Videos
                          effectively and easily.
                        </Typography>
                      </CardContent>
                      <CardContent sx={{ flexGrow: 1 }}></CardContent>
  
                      <CardActions
                        style={{
                          justifyContent: "end",
                        }}>
                        <Button size="large" sx={buttonStyle}>
                          <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Item>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
  
  export default CardsDesign;
  






