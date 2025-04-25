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
        Learning Grid properties, Implementation and designs.
      </Typography>
      {/* <h1>HOME PAGE..</h1>
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
      <SimpleAlert/> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={7} display={"flex"}>
            <Item>
              <MediaCard />
            </Item>

            <Item>
              <Card sx={{ maxWidth: 345 ,
                background:'linear-gradient(to right, #2c3e50, #bdc3c7)'
              }}>
                <CardMedia title="green iguana" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="left"
                    padding={4}>
                    Profile
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>

                  <CardActions>
                    <Button variant="contained" color="inherit">
                      Click here
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>

            <Item>
              <MediaCard />
            </Item>
          </Grid>

          <Grid size={5}>
          <Item>
              <Card sx={{ maxWidth: 345 ,
                background:'linear-gradient(to right, #2c3e50, #bdc3c7)'
              }}>
                <CardMedia title="green iguana" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="left"
                    padding={4}>
                    Profile
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>

                  <CardActions>
                    <Button variant="contained" color="inherit">
                      Click here
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>

            <Item>
              <Card sx={{ maxWidth: 345 ,
                background:'linear-gradient(to right, #2c3e50, #bdc3c7)'
              }}>
                <CardMedia title="green iguana" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="left"
                    padding={4}>
                    Profile
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>

                  <CardActions>
                    <Button variant="contained" color="inherit">
                      Click here
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>


          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
