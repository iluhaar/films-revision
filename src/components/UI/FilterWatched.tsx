import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { filterFilms } from "../../store/reducers/filmsSlice";

const FilterWatched = () => {
  const [watchedFilter, setWatchedFilter] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setWatchedFilter(event.target.value as string);
    dispatch(filterFilms(event.target.value as string));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="watched-filter">Filter</InputLabel>
        <Select
          labelId="watched-filter"
          id="watched-select"
          value={watchedFilter}
          label="Watched Filter"
          onChange={handleChange}
          sx={{ backgroundColor: "#61dafbaa" }}
        >
          <MenuItem value={"At first"}>Watched at first</MenuItem>
          <MenuItem value={"At last"}>Watched at last</MenuItem>
          <MenuItem value={"Reset"}>Reset</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterWatched;
