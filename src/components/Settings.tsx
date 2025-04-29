import { styled, Paper, Box, Grid, Stack, Card, CardContent, Button, Chip, Divider, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomMarks from "../others/CustomMarks";
import BasicRating from "../others/Rating";
import { CheckBox } from "@mui/icons-material";
import CheckboxLabels from "../others/CheckBox";
import SelectVariants from "../others/SelectVarients";
import LimitTags from "../others/LimitTags";
import RadioButtonsGroup from "../others/RadioButton";
import img1 from '../assets/images (1).jpeg'
import img2 from '../assets/images (2).jpeg'



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

const Settings = () => {
  return (
    <>
      <h1>SETTINGS PAGE ..</h1>
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
        
        <Grid size={2.5}>
          Filter By:
          <Item>
            <Box padding={1} >
              <Card sx={{
                maxWidth:440, alignContent:"center"
              }}>
                <CardContent>
                  <Stack>

                    <LimitTags/>
                <Typography fontWeight={"bold"}  align="left" padding={2}>Bugdets
                    <CustomMarks/>
                </Typography>

                <Typography fontWeight={"bold"}  align="left" padding={2} >Bugdets
                    <SelectVariants/>
                </Typography>
                    
                    
                    <CheckboxLabels/>
                    <RadioButtonsGroup/>
                    <BasicRating/>
                    
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
        <Grid size={9.5}>
          <Typography>
            Contents
          </Typography>
          <Item>
            <Stack gap={2}>
              <Card variant="outlined" sx={{ maxWidth: 600 }}>
                    <Box sx={{ p: 2 }}>
                    <CardMedia
                              sx={{ height: 140 }}
                              image={img2}
                              title="green iguana"
                            />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Toothbrush
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          $4.50
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Typography gutterBottom variant="body2">
                        Select type
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Soft" size="small" />
                        <Chip label="Medium" size="small" />
                        <Chip label="Hard" size="small" />
                      </Stack>
                    </Box>
                  </Card>

                  <Card variant="outlined" sx={{ maxWidth: 600 }}>
                    <Box sx={{ p: 2 }}>
                      <CardMedia
                              sx={{ height: 140 }}
                              image={img1}
                              title="green iguana"
                            />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Toothbrush
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          $4.50
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Typography gutterBottom variant="body2">
                        Select type
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Soft" size="small" />
                        <Chip label="Medium" size="small" />
                        <Chip label="Hard" size="small" />
                      </Stack>
                    </Box>
                  </Card>

                  <Card variant="outlined" sx={{ maxWidth: 600 }}>
                    <Box sx={{ p: 2 }}>
                      <CardMedia
                              sx={{ height: 140 }}
                              image={img1}
                              title="green iguana"
                            />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Toothbrush
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          $4.50
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Typography gutterBottom variant="body2">
                        Select type
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Soft" size="small" />
                        <Chip label="Medium" size="small" />
                        <Chip label="Hard" size="small" />
                      </Stack>
                    </Box>
                  </Card>

                  <Card variant="outlined" sx={{ maxWidth: 600 }}>
                    <Box sx={{ p: 2 }}>
                      <CardMedia
                              sx={{ height: 140 }}
                              image={img1}
                              title="green iguana"
                            />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Toothbrush
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          $4.50
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Typography gutterBottom variant="body2">
                        Select type
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Soft" size="small" />
                        <Chip label="Medium" size="small" />
                        <Chip label="Hard" size="small" />
                      </Stack>
                    </Box>
                  </Card>

                  <Card variant="outlined" sx={{ maxWidth: 600 }}>
                    <Box sx={{ p: 2 }}>
                      <CardMedia
                              sx={{ height: 140 }}
                              image={img1}
                              title="green iguana"
                            />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Toothbrush
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          $4.50
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      
                      <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Soft" size="small" />
                        <Chip label="Medium" size="small" />
                        <Chip label="Hard" size="small" />
                      </Stack>
                    </Box>
                  </Card>

                  
                  
            </Stack>

          </Item>
        </Grid>
      </Grid>
    </Box>

    </>
  );
};

export default Settings;
