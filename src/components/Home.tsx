import Typography from "@mui/material/Typography";
import SimpleAlert from "../others/SimpleAlert";
import { styled } from '@mui/material/styles';
import { Paper, Box, Grid, Accordion, Stack } from "@mui/material";
import ReviewCard from "../others/Card";
import CustomizedTables from "../others/Table";
import AccordionUsage from "../others/Accordion";
import SelectActionCard from "../others/SelectActionCard";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
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
        <Stack>

        <Grid size={{ xs: 4, md: 6, lg:8, xl:12 }}
        sx={{
          flexDirection:{
            xs:"column",
            md:"row",
            lg:"row"
          }
        }}> {/* First row..  */}
            
          <Grid display={"flex"} gap={2}
          sx={
            {
              flexDirection:{
                sm:"column", md:"row"
              }
            }
          }>
            
            <Grid>
              <Stack spacing={1}>
                <SelectActionCard/>
              </Stack>
              
            </Grid>

            <Grid>
              <Stack spacing={1}>
                <SelectActionCard/>
              </Stack>
              
            </Grid>
            
              

            <Grid size={{ xs: 4, md: 4, lg:6, xl:8 }}>
              

            </Grid>






          </Grid>



          {/* <Box display={"flex"}  >
          <ReviewCard/>
          </Box> */}
        </Grid>


        <Grid size={{ xs: 6, md: 6 }}>{/* Second row..  */}
          <Item>xs=6 md=4</Item>
        </Grid>

        <Grid size={{ xs: 6, md: 8 }}>{/*  Third row.. */}
          <CustomizedTables/>
        </Grid>


        <Grid size={{ xs: 2, md: 4 }}>
          <AccordionUsage/>
        </Grid>
        
        </Stack>
      </Grid>
    </Box>
    </>
  );
};

export default Home;
