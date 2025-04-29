import Typography from "@mui/material/Typography";


import "../styles/dashboard.css";
import {
  
  Box,
  Grid,
  Stack,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import StartIcon from "@mui/icons-material/Start";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import EditDocumentIcon from "@mui/icons-material/EditDocument";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ListAltIcon from "@mui/icons-material/ListAlt";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";



const fontStyle = {
  fontWeight: "bold", // Makes the font bold
  fontFamily: '"Madimi One", sans-serif', // Change font family (example: Roboto)
  fontSize: "30px",
};

const Home = () => {
  return (
    <>
      <Typography variant="h4" component={"div"} align="center" padding={3} fontStyle={"oblique"} fontWeight={"bold"}>
        Welcome to Dashboard ! 
      </Typography>
      <h1>Applications</h1>
      
        



      <Typography sx={{ marginBottom: 2 }}>
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
        Lorem donec massa sapien faucibus et molestie ac. HOME PAGE ....
      </Typography>
      









      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid
            size={12}
            padding={5}
            gap={2}
            display={{
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}>
            <Stack gap={2}>
              <Card
                sx={{
                  alignContent: "center",
                  maxWidth: 1000,
                  minHeight: 286,
                  background: "linear-gradient(to right, #5f2c82, #49a09d)",
                  borderRadius: 9,
                  padding: "8px",
                }}>
                <CardMedia title="green iguana" />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    gap={2}
                    padding={2}>
                    <Typography
                      variant="h5"
                      component="div"
                      // align="left"

                      style={fontStyle}>
                      Get Started
                    </Typography>
                    <StartIcon
                      style={{
                        alignContent: "center",
                        fontSize: "30px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      padding: 2,
                      fontFamily: '"Tagesschrift", sans-serif',
                      textAlign: "center",
                    }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica and Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Asperiores eos quod consectetur est
                    reprehenderit, quisquam repellat nemo quam dolor architecto!
                  </Typography>

                  <CardActions>
                    <Button variant="contained" color="inherit">
                      <ArrowForwardIcon />
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>

              <Grid
                gap={2}
                display={{
                  lg: "flex",
                  md: "flex",
                }}>
                <Card
                  sx={{
                    alignContent: "center",
                    maxWidth: {
                      xs: 500,
                      md: 345,
                      lg: 350,
                      xl: 350,
                    },
                    minHeight: 300,
                    background:
                      "linear-gradient(to right,rgb(233, 134, 134),rgb(58, 74, 122))",
                    borderRadius: 9,
                    padding: 2,
                  }}>
                  <CardMedia title="green iguana" />
                  <CardContent>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      gap={2}
                      padding={2}>
                      <Typography
                        variant="h5"
                        component="div"
                        // align="left"

                        style={fontStyle}>
                        Settings
                      </Typography>
                      <SettingsSuggestIcon
                        style={{
                          alignContent: "center",
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontFamily: '"Tagesschrift", sans-serif',
                        textAlign: "center",
                      }}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>

                    <CardActions>
                      <Button variant="contained" color="inherit">
                        <ArrowForwardIcon />
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    alignContent: "center",
                    maxWidth: 600,
                    minHeight: 300,
                    background: "linear-gradient(to right, #215f00, #e4e4d9);",
                    borderRadius: 9,
                    padding: 2,
                  }}>
                  <CardMedia title="green iguana" />
                  <CardContent>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      gap={2}
                      padding={2}>
                      <Typography
                        variant="h5"
                        component="div"
                        // align="left"

                        style={fontStyle}>
                        Documents
                      </Typography>
                      <EditDocumentIcon
                        style={{
                          alignContent: "center",
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontFamily: '"Tagesschrift", sans-serif',
                        padding: 2,
                        textAlign: "center",
                      }}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>

                    <CardActions>
                      <Button variant="contained" color="inherit">
                        <ArrowForwardIcon />
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            </Stack>

            <Grid
              gap={2}
              display={{
                lg: "flex",
                xl: "flex",
              }}>
              <Grid>
                <Stack gap={2}>
                  {" "}
                  <Card
                    sx={{
                      alignContent: "center",
                      maxWidth: {
                        md: 375,
                        lg: 375,
                        xl: 375,
                      },
                      minHeight: 287,
                      background: "linear-gradient(to right, #c0c0aa, #1cefff)",
                      borderRadius: 9,
                      padding: 2,
                    }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        gap={2}
                        padding={2}>
                        <Typography
                          variant="h5"
                          component="div"
                          // align="left"

                          style={fontStyle}>
                          Items
                        </Typography>
                        <AnalyticsIcon
                          style={{
                            alignContent: "center",
                            fontSize: "30px",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{}}
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontFamily: '"Tagesschrift", sans-serif',
                          padding: 1.2,
                          textAlign: "center",
                        }}>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>

                      <CardActions>
                        <Button variant="contained" color="inherit">
                          <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      alignContent: "center",
                      maxWidth: {
                        md: 375,
                        lg: 375,
                        xl: 375,
                      },
                      minHeight: 300,
                      background: "linear-gradient(to right, #2c3e50, #bdc3c7)",
                      borderRadius: 9,
                      padding: 2,
                    }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        gap={2}
                        padding={2}>
                        <Typography
                          variant="h5"
                          component="div"
                          // align="left"

                          style={fontStyle}>
                          Contacts
                        </Typography>
                        <LocalActivityIcon
                          style={{
                            alignContent: "center",
                            fontSize: "30px",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontFamily: '"Tagesschrift", sans-serif',
                          textAlign: "center",
                        }}>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>

                      <CardActions>
                        <Button variant="contained" color="inherit">
                          <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid>
                <Card
                  sx={{
                    alignContent: "center",
                    maxWidth: {
                      md: 405,
                      lg: 405,
                      xl: 405,
                    },
                    minHeight: 620,
                    background: "linear-gradient(to right, #FFFDE4, #005AA7)",
                    borderRadius: 9,
                    padding: 3,
                  }}>
                  <CardMedia title="green iguana" />
                  <CardContent>
                    <Box display={"flex"} justifyContent={"center"} gap={2}>
                      <Typography
                        variant="h5"
                        component="div"
                        // align="left"

                        style={fontStyle}>
                        Activities
                      </Typography>
                      <ListAltIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontFamily: '"Tagesschrift", sans-serif',
                        padding: 2,
                        textAlign: "center",
                      }}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>

                    <CardActions>
                      <Button variant="contained" color="inherit">
                        <ArrowForwardIcon />
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      

      
    </>
  );
};

export default Home;
