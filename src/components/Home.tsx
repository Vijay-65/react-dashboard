import Typography from "@mui/material/Typography";
import SimpleAlert from "../others/SimpleAlert";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Box,
  Grid,
  Accordion,
  Stack,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import ReviewCard from "../others/Card";
import CustomizedTables from "../others/Table";
import AccordionUsage from "../others/Accordion";
import SelectActionCard from "../others/SelectActionCard";
import MediaCard from "../others/MediaCard";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import StartIcon from '@mui/icons-material/Start';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeDesign2 from "../others/HomeDesign2";

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

const Home = () => {
  return (
    <>
      <Typography variant="h5" component={"div"} align="center" padding={3}>
        Welcome to Dashboard ! Here you can Search .
      </Typography>
      <h1>HOME PAGE..</h1>
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
        Lorem donec massa sapien faucibus et molestie ac. HOME PAGE ....
      </Typography> */}
      {/* <SimpleAlert/> */}

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
              <Item>
                <Card 
                  sx={{
                    alignContent:"center",
                    maxWidth: 1000,
                    minHeight: 286,
                    background: "linear-gradient(to right, #5f2c82, #49a09d)",
                  }}>
                  <CardMedia title="green iguana" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="left"
                      padding={2}>
                      Get Started
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", padding: 2 }}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eos quod consectetur est reprehenderit, quisquam repellat nemo quam dolor architecto!
                    </Typography>

                    <CardActions>
                      <Button variant="contained" color="inherit">
                        <ArrowForwardIcon/>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Item>

              <Grid
                gap={2}
                display={{
                  lg: "flex",
                  md: "flex",
                }}>
                <Item>
                  <Card
                    sx={{
                      alignContent:"center",
                      maxWidth: {
                        xs: 500,
                        md: 345,
                        lg: 350,
                        xl: 350,
                      },
                      minHeight: 300,
                      background:
                        "linear-gradient(to right,rgb(233, 134, 134),rgb(58, 74, 122))",
                    }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                        padding={4}>
                        Settings
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>

                      <CardActions>
                        <Button variant="contained" color="inherit">
                          <ArrowForwardIcon/>
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Item>

                <Item>
                  <Card 
                    sx={{
                      alignContent:"center",
                      maxWidth: 600,minHeight:300,
                      background:
                        "linear-gradient(to right, #215f00, #e4e4d9);",
                    }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                        padding={3}>
                        Media
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>

                      <CardActions>
                        <Button variant="contained" color="inherit">
                        <ArrowForwardIcon/>
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Item>
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
                  <Item>
                    <Card
                      sx={{
                        alignContent:"center",
                        maxWidth: {
                          md: 375,
                          lg: 375,
                          xl: 375,
                        },
                        minHeight: 287,
                        background:
                          "linear-gradient(to right, #c0c0aa, #1cefff)",
                      }}>
                      <CardMedia title="green iguana" />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          align="left"
                          padding={4}>
                          Rate Analysis 
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}>
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>

                        <CardActions>
                          <Button variant="contained" color="inherit">
                          <ArrowForwardIcon/>
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Item>
                  <Item>
                    <Card
                      sx={{
                        alignContent:"center",
                        maxWidth: {
                          md: 375,
                          lg: 375,
                          xl: 375,
                        },
                        minHeight:300,
                        background:
                          "linear-gradient(to right, #2c3e50, #bdc3c7)",
                      }}>
                      <CardMedia title="green iguana" />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          align="left"
                          padding={4}>
                          Elements
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}>
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>

                        <CardActions>
                          <Button variant="contained" color="inherit">
                          <ArrowForwardIcon/>
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Item>
                </Stack>
              </Grid>

              <Grid>
                <Item>
                  <Card
                    sx={{
                      alignContent:"center",
                      maxWidth: {
                        md: 405,
                        lg: 405,
                        xl: 405,
                      },
                      minHeight: 620,
                      background: "linear-gradient(to right, #FFFDE4, #005AA7)",
                    }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="left"
                        padding={7}>
                        Employee Profiles
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>

                      <CardActions>
                        <Button variant="contained" color="inherit">
                        <ArrowForwardIcon/>
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h5" component={"div"} align="center" padding={3}>
        Welcome to 2nd Dashboard design using Grid..
      </Typography>

      <HomeDesign2/>
    </>
  );
};

export default Home;
