import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

const BankNamesLabel = () => {
  return (
    <>
      <FormControl variant="filled" fullWidth required margin="dense">
        <InputLabel>Bank Name</InputLabel>
        <Select label="Bank Name">
          <MenuItem value="State Bank of India">State Bank of India</MenuItem>
          <MenuItem value="Punjab National Bank">Punjab National Bank</MenuItem>
          <MenuItem value="Bank of Baroda">Bank of Baroda</MenuItem>
          <MenuItem value="Canara Bank">Canara Bank</MenuItem>
          <MenuItem value="Union Bank of India">Union Bank of India</MenuItem>
          <MenuItem value="Indian Bank">Indian Bank</MenuItem>
          <MenuItem value="Bank of India">Bank of India</MenuItem>
          <MenuItem value="Central Bank of India">
            Central Bank of India
          </MenuItem>
          <MenuItem value="UCO Bank">UCO Bank</MenuItem>
          <MenuItem value="Indian Overseas Bank">Indian Overseas Bank</MenuItem>
          <MenuItem value="Punjab & Sind Bank">Punjab & Sind Bank</MenuItem>
          <MenuItem value="Bank of Maharashtra">Bank of Maharashtra</MenuItem>
          <MenuItem value="HDFC Bank">HDFC Bank</MenuItem>
          <MenuItem value="ICICI Bank">ICICI Bank</MenuItem>
          <MenuItem value="Axis Bank">Axis Bank</MenuItem>
          <MenuItem value="Kotak Mahindra Bank">Kotak Mahindra Bank</MenuItem>
          <MenuItem value="IndusInd Bank">IndusInd Bank</MenuItem>
          <MenuItem value="Yes Bank">Yes Bank</MenuItem>
          <MenuItem value="IDFC FIRST Bank">IDFC FIRST Bank</MenuItem>
          <MenuItem value="Federal Bank">Federal Bank</MenuItem>
          <MenuItem value="South Indian Bank">South Indian Bank</MenuItem>
          <MenuItem value="RBL Bank">RBL Bank</MenuItem>
          <MenuItem value="DCB Bank">DCB Bank</MenuItem>
          <MenuItem value="Karur Vysya Bank">Karur Vysya Bank</MenuItem>
          <MenuItem value="City Union Bank">City Union Bank</MenuItem>
          <MenuItem value="Tamilnad Mercantile Bank">
            Tamilnad Mercantile Bank
          </MenuItem>
          <MenuItem value="AU Small Finance Bank">
            AU Small Finance Bank
          </MenuItem>
          <MenuItem value="Equitas Small Finance Bank">
            Equitas Small Finance Bank
          </MenuItem>
          <MenuItem value="Ujjivan Small Finance Bank">
            Ujjivan Small Finance Bank
          </MenuItem>
          <MenuItem value="Jana Small Finance Bank">
            Jana Small Finance Bank
          </MenuItem>
          <MenuItem value="Suryoday Small Finance Bank">
            Suryoday Small Finance Bank
          </MenuItem>
          <MenuItem value="ESAF Small Finance Bank">
            ESAF Small Finance Bank
          </MenuItem>
          <MenuItem value="North East Small Finance Bank">
            North East Small Finance Bank
          </MenuItem>
          <MenuItem value="Capital Small Finance Bank">
            Capital Small Finance Bank
          </MenuItem>
          <MenuItem value="Fincare Small Finance Bank">
            Fincare Small Finance Bank
          </MenuItem>
          <MenuItem value="Shivalik Small Finance Bank">
            Shivalik Small Finance Bank
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default BankNamesLabel;
