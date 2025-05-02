import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box display={"flex"}>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
            <InputLabel id="demo-select-small-label">From</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1 KM</MenuItem>
              <MenuItem value={2}>2 KM</MenuItem>
              <MenuItem value={3}>3 KM</MenuItem>
              <MenuItem value={4}>4 KM</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
            <InputLabel id="demo-select-small-label">To</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>5 KM</MenuItem>
              <MenuItem value={6}>6 KM</MenuItem>
              <MenuItem value={7}>7 KM</MenuItem>
              <MenuItem value={8}>8 KM</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
