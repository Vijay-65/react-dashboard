import {
  styled,
  Paper,
  Box,
  Grid,
  Stack,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
  CardMedia,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomMarks from "../others/CustomMarks";
import BasicRating, { CardRating } from "../others/Rating";

import CheckboxLabels from "../others/CheckBox";
import SelectVariants from "../others/SelectVarients";
import LimitTags from "../others/LimitTags";
import RadioButtonsGroup from "../others/RadioButton";
import img1 from "../assets/images (1).jpeg";
import img2 from "../assets/images (2).jpeg";
import img3 from "../assets/images (3).jpeg"
import img4 from "../assets/images.jpeg"
import img5 from "../assets/download.jpeg"
import img6 from "../assets/download (1).jpeg"
import img7 from "../assets/download (2).jpeg"


import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import cardImg from "../assets/CardBackground.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "../styles/Settings.css";

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

const fontFamilyContent = {
  fontFamily: '"Outfit", sans-serif',
  fontWeight: "unset",
};

const fontFamilyTopic = {
  fontFamily: '"Outfit", sans-serif',
};

const Settings = () => {
  return (
    <>
      {/* <h1>SETTINGS PAGE ..</h1> */}
      {/* <Typography sx={{ marginBottom: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac. SETTINGS PAGE ....
      </Typography> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Typography variant="h5" fontWeight={"bold"} style={fontFamilyTopic}>
                Filter Pages
            </Typography>
            <Item>
              <Box padding={1}>
                <Card
                  sx={{
                    maxWidth: 440,
                    alignContent: "center",
                  }}>
                  <CardContent>
                    <Stack>
                      <LimitTags />
                      <Typography fontWeight={"bold"} align="left" padding={2}>
                        Bugdets
                        <CustomMarks />
                      </Typography>

                      <Typography fontWeight={"bold"} align="left" padding={2}>
                        Bugdets
                        <SelectVariants />
                      </Typography>

                      <CheckboxLabels />
                      <RadioButtonsGroup />
                      <BasicRating />
                    </Stack>

                    <Stack gap={2} paddingTop={2}>
                      <Button variant="contained">Apply</Button>
                      <Button variant="outlined">Clear</Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Item>
          </Grid>

          <Grid size={9}>
            <Box>
              <Typography>Contents</Typography>
            </Box>
            <Grid>
              <Box
                gap={4}
                justifyContent={"center"}
                display={"flex"}
                flexWrap={"wrap"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                }}>


    {/*------------------------- First card -------------------------------- */}
                <Box >
                  <Card
                    variant="elevation"
                    sx={{
                      maxWidth: 600 /* backgroundImage:`url(${cardImg})` */,
                      background: `linear-gradient(135deg, #add8e6 5%, white 30%, white 70%, #add8e6 95% )`,
                    }}>
                    <Box sx={{ p: 3 }} display={"flex"} gap={2}>
                      <Box>
                        <CardMedia
                          sx={{
                            height: 180,
                            width: 170,
                            borderRadius: 6,
                            minHeight: 50,
                            minWidth: 50,
                          }}
                          image={img1}
                          title="green iguana"
                        />
                      </Box>

                      <Box padding={1} gap={2}>
                        <Box>
                          <Typography
                            variant="h4"
                            align="left"
                            style={fontFamilyTopic}>
                            Himayalas
                          </Typography>
                          <Typography align="left" style={fontFamilyContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            agni velit exercitationem nihil iure numquam!
                          </Typography>
                        </Box>

                        <Box paddingBottom={0.5} paddingTop={0.5}>
                          <Typography>
                            <CardRating />
                          </Typography>
                        </Box>
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={fontFamilyContent}
                              style={{
                                backgroundColor: "rgba(164, 110, 47, 0.7)",
                              }}
                              label="Safe"
                              size="small"
                            />
                            <Chip
                              sx={fontFamilyContent}
                              variant="outlined"
                              style={{
                                borderRadius: 40,

                                backgroundColor: "rgb(120, 209, 161)",
                              }}
                              label="Allowed"
                              size="small"
                            />
                          </Stack>
                        </Box>
                      </Box>

                      <Box>
                        <Divider orientation="vertical" />
                      </Box>

                      <Box alignItems={"center"}>
                        <FavoriteIcon />
                        <ShareIcon />

                        <LocationOnIcon />
                      </Box>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ p: 2, maxWidth: 580 }}
                      gap={2}
                      display={"flex"}
                      justifyContent={"space-between"}>
                      <Box display={"flex"} gap={1}>
                        <Box>
                          <Button
                            variant="outlined"
                            style={fontFamilyContent}
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
                            }}>
                            Add Place
                          </Button>
                        </Box>

                        <Box>
                          <Button
                            style={fontFamilyContent}
                            variant="outlined"
                            sx={{
                              borderRadius: 2,
                              color: "black",
                              borderColor: "black",
                              transition: "background-color 0.3s ease-in-out", // Transition background color
                              "&:hover": {
                                backgroundColor: "#384040", // Background color on hover
                                color: "whitesmoke",
                              },
                            }}>
                            Details
                          </Button>
                        </Box>
                      </Box>

                      <Box display={"flex"} alignItems={"center"}>
                        <CurrencyRupeeIcon sx={{ fontSize: 29 }} />
                        <Typography variant="h5" fontWeight={"bold"}>
                          27.70
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>

  {/*-----------------------Second card ------------------------*/}

                <Box >
                  <Card
                    variant="elevation"
                    sx={{
                      maxWidth: 600 /* backgroundImage:`url(${cardImg})` */,
                      background: `linear-gradient(135deg, #add8e6 5%, white 30%, white 70%, #add8e6 95% )`,
                    }}>
                    <Box sx={{ p: 3 }} display={"flex"} gap={2}>
                      <Box>
                        <CardMedia
                          sx={{ height: 180, width: 170, borderRadius: 6 }}
                          image={img2}
                          title="green iguana"
                        />
                      </Box>

                      <Box padding={1} gap={2}>
                        <Box>
                          <Typography
                            variant="h4"
                            align="left"
                            style={fontFamilyTopic}>
                            Mountains
                          </Typography>
                          <Typography align="left" style={fontFamilyContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            agni velit exercitationem nihil iure numquam!
                          </Typography>
                        </Box>

                        <Box paddingBottom={0.5} paddingTop={0.5}>
                          <Typography>
                            <CardRating />
                          </Typography>
                        </Box>
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={fontFamilyContent}
                              style={{
                                backgroundColor: "rgba(164, 110, 47, 0.7)",
                              }}
                              label="Safe"
                              size="small"
                            />
                            <Chip
                              sx={fontFamilyContent}
                              variant="outlined"
                              style={{
                                borderRadius: 40,

                                backgroundColor: "rgb(120, 209, 161)",
                              }}
                              label="Allowed"
                              size="small"
                            />
                          </Stack>
                        </Box>
                      </Box>

                      <Box>
                        <Divider orientation="vertical" />
                      </Box>

                      <Box alignItems={"center"}>
                        <FavoriteIcon />
                        <ShareIcon />

                        <LocationOnIcon />
                      </Box>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ p: 2, maxWidth: 580 }}
                      gap={2}
                      display={"flex"}
                      justifyContent={"space-between"}>
                      <Box display={"flex"} gap={1}>
                        <Box>
                          <Button
                            variant="outlined"
                            style={fontFamilyContent}
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
                            }}>
                            Add Place
                          </Button>
                        </Box>

                        <Box>
                          <Button
                            style={fontFamilyContent}
                            variant="outlined"
                            sx={{
                              borderRadius: 2,
                              color: "black",
                              borderColor: "black",
                              transition: "background-color 0.3s ease-in-out", // Transition background color
                              "&:hover": {
                                backgroundColor: "#384040", // Background color on hover
                                color: "whitesmoke",
                              },
                            }}>
                            Details
                          </Button>
                        </Box>
                      </Box>

                      <Box display={"flex"}>
                        <CurrencyRupeeIcon sx={{ fontSize: 29 }} />
                        <Typography variant="h5" fontWeight={"bold"}>
                          54.21
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
                
 {/* --------------------- Third Card ---------------------------*/}
                <Box >
                  <Card
                    variant="elevation"
                    sx={{
                      maxWidth: 600 /* backgroundImage:`url(${cardImg})` */,
                      background: `linear-gradient(135deg, #add8e6 5%, white 30%, white 70%, #add8e6 95% )`,
                    }}>
                    <Box sx={{ p: 3 }} display={"flex"} gap={2}>
                      <Box>
                        <CardMedia
                          sx={{
                            height: 180,
                            width: 170,
                            borderRadius: 6,
                            minHeight: 50,
                            minWidth: 50,
                          }}
                          image={img3}
                          title="green iguana"
                        />
                      </Box>

                      <Box padding={1} gap={2}>
                        <Box>
                          <Typography
                            variant="h4"
                            align="left"
                            style={fontFamilyTopic}>
                            Rivers
                          </Typography>
                          <Typography align="left" style={fontFamilyContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            agni velit exercitationem nihil iure numquam!
                          </Typography>
                        </Box>

                        <Box paddingBottom={0.5} paddingTop={0.5}>
                          <Typography>
                            <CardRating />
                          </Typography>
                        </Box>
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={fontFamilyContent}
                              style={{
                                backgroundColor: "rgba(164, 110, 47, 0.7)",
                              }}
                              label="Safe"
                              size="small"
                            />
                            <Chip
                              sx={fontFamilyContent}
                              variant="outlined"
                              style={{
                                borderRadius: 40,

                                backgroundColor: "rgb(120, 209, 161)",
                              }}
                              label="Allowed"
                              size="small"
                            />
                          </Stack>
                        </Box>
                      </Box>

                      <Box>
                        <Divider orientation="vertical" />
                      </Box>

                      <Box alignItems={"center"}>
                        <FavoriteIcon />
                        <ShareIcon />

                        <LocationOnIcon />
                      </Box>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ p: 2, maxWidth: 580 }}
                      gap={2}
                      display={"flex"}
                      justifyContent={"space-between"}>
                      <Box display={"flex"} gap={1}>
                        <Box>
                          <Button
                            variant="outlined"
                            style={fontFamilyContent}
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
                            }}>
                            Add Place
                          </Button>
                        </Box>

                        <Box>
                          <Button
                            style={fontFamilyContent}
                            variant="outlined"
                            sx={{
                              borderRadius: 2,
                              color: "black",
                              borderColor: "black",
                              transition: "background-color 0.3s ease-in-out", // Transition background color
                              "&:hover": {
                                backgroundColor: "#384040", // Background color on hover
                                color: "whitesmoke",
                              },
                            }}>
                            Details
                          </Button>
                        </Box>
                      </Box>

                      <Box display={"flex"} alignItems={"center"}>
                        <CurrencyRupeeIcon sx={{ fontSize: 29 }} />
                        <Typography variant="h5" fontWeight={"bold"}>
                          350.00
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>

  {/** -------------------------------- Fourth card ---------------------------------- */}
                <Box >
                  <Card
                    variant="elevation"
                    sx={{
                      maxWidth: 600 /* backgroundImage:`url(${cardImg})` */,
                      background: `linear-gradient(135deg, #add8e6 5%, white 30%, white 70%, #add8e6 95% )`,
                    }}>
                    <Box sx={{ p: 3 }} display={"flex"} gap={2}>
                      <Box>
                        <CardMedia
                          sx={{
                            height: 180,
                            width: 170,
                            borderRadius: 6,
                            minHeight: 50,
                            minWidth: 50,
                          }}
                          image={img4}
                          title="green iguana"
                        />
                      </Box>

                      <Box padding={1} gap={2}>
                        <Box>
                          <Typography
                            variant="h4"
                            align="left"
                            style={fontFamilyTopic}>
                            Lakes 
                          </Typography>
                          <Typography align="left" style={fontFamilyContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            agni velit exercitationem nihil iure numquam!
                          </Typography>
                        </Box>

                        <Box paddingBottom={0.5} paddingTop={0.5}>
                          <Typography>
                            <CardRating />
                          </Typography>
                        </Box>
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={fontFamilyContent}
                              style={{
                                backgroundColor: "rgba(164, 110, 47, 0.7)",
                              }}
                              label="Safe"
                              size="small"
                            />
                            <Chip
                              sx={fontFamilyContent}
                              variant="outlined"
                              style={{
                                borderRadius: 40,

                                backgroundColor: "rgb(120, 209, 161)",
                              }}
                              label="Allowed"
                              size="small"
                            />
                          </Stack>
                        </Box>
                      </Box>

                      <Box>
                        <Divider orientation="vertical" />
                      </Box>

                      <Box alignItems={"center"}>
                        <FavoriteIcon />
                        <ShareIcon />

                        <LocationOnIcon />
                      </Box>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ p: 2, maxWidth: 580 }}
                      gap={2}
                      display={"flex"}
                      justifyContent={"space-between"}>
                      <Box display={"flex"} gap={1}>
                        <Box>
                          <Button
                            variant="outlined"
                            style={fontFamilyContent}
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
                            }}>
                            Add Place
                          </Button>
                        </Box>

                        <Box>
                          <Button
                            style={fontFamilyContent}
                            variant="outlined"
                            sx={{
                              borderRadius: 2,
                              color: "black",
                              borderColor: "black",
                              transition: "background-color 0.3s ease-in-out", // Transition background color
                              "&:hover": {
                                backgroundColor: "#384040", // Background color on hover
                                color: "whitesmoke",
                              },
                            }}>
                            Details
                          </Button>
                        </Box>
                      </Box>

                      <Box display={"flex"} alignItems={"center"}>
                        <CurrencyRupeeIcon sx={{ fontSize: 29 }} />
                        <Typography variant="h5" fontWeight={"bold"}>
                          693.70
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>

                {/* -------------------------- Fifth card ----------------------------- */}

                <Box >
                  <Card
                    variant="elevation"
                    sx={{
                      maxWidth: 600 /* backgroundImage:`url(${cardImg})` */,
                      background: `linear-gradient(135deg, #add8e6 5%, white 30%, white 70%, #add8e6 95% )`,
                    }}>
                    <Box sx={{ p: 3 }} display={"flex"} gap={2}>
                      <Box>
                        <CardMedia
                          sx={{
                            height: 180,
                            width: 170,
                            borderRadius: 6,
                            minHeight: 50,
                            minWidth: 50,
                          }}
                          image={img5}
                          title="green iguana"
                        />
                      </Box>

                      <Box padding={1} gap={2}>
                        <Box>
                          <Typography
                            variant="h4"
                            align="left"
                            style={fontFamilyTopic}>
                            Night-Sky
                          </Typography>
                          <Typography align="left" style={fontFamilyContent}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            agni velit exercitationem nihil iure numquam!
                          </Typography>
                        </Box>

                        <Box paddingBottom={0.5} paddingTop={0.5}>
                          <Typography>
                            <CardRating />
                          </Typography>
                        </Box>
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={fontFamilyContent}
                              style={{
                                backgroundColor: "rgba(164, 110, 47, 0.7)",
                              }}
                              label="Safe"
                              size="small"
                            />
                            <Chip
                              sx={fontFamilyContent}
                              variant="outlined"
                              style={{
                                borderRadius: 40,

                                backgroundColor: "rgb(120, 209, 161)",
                              }}
                              label="Allowed"
                              size="small"
                            />
                          </Stack>
                        </Box>
                      </Box>

                      <Box>
                        <Divider orientation="vertical" />
                      </Box>

                      <Box alignItems={"center"}>
                        <FavoriteIcon />
                        <ShareIcon />

                        <LocationOnIcon />
                      </Box>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ p: 2, maxWidth: 580 }}
                      gap={2}
                      display={"flex"}
                      justifyContent={"space-between"}>
                      <Box display={"flex"} gap={1}>
                        <Box>
                          <Button
                            variant="outlined"
                            style={fontFamilyContent}
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
                            }}>
                            Add Place
                          </Button>
                        </Box>

                        <Box>
                          <Button
                            style={fontFamilyContent}
                            variant="outlined"
                            sx={{
                              borderRadius: 2,
                              color: "black",
                              borderColor: "black",
                              transition: "background-color 0.3s ease-in-out", // Transition background color
                              "&:hover": {
                                backgroundColor: "#384040", // Background color on hover
                                color: "whitesmoke",
                              },
                            }}>
                            Details
                          </Button>
                        </Box>
                      </Box>

                      <Box display={"flex"} alignItems={"center"}>
                        <CurrencyRupeeIcon sx={{ fontSize: 29 }} />
                        <Typography variant="h5" fontWeight={"bold"}>
                          89.70
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>

              
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Settings;
