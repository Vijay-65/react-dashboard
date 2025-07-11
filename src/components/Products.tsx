import Typography from "@mui/material/Typography";
import FormDialog from "../others/PopupDialog";
import ImageUploadPopup from "../others/ImageUpload";
import DocumentUploadPopup from "../others/DocumentUpload";
import AadharUploadField from "../others/UploadFields";
import ImgUploadPopup from "../others/ImageUpload";

const Products = () => {
  return (
    <>
      <h1>PRODUCTS PAGE..</h1>
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
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <FormDialog/>
      <DocumentUploadPopup/> 
       <ImageUploadPopup/>

      <AadharUploadField />

      <h4>new-------------</h4>
      <ImgUploadPopup/>
    </>
  );
};

export default Products;
