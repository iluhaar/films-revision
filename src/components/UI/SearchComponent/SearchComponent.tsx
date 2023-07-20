import { TextField } from "@mui/material";
import { useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { searchFilm } from "../../../store/reducers/filmsSlice";

const SearchComponent = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = useDebounce((searchTerm: string) => {
    dispatch(searchFilm({ searchTerm }));
  }, 2500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <>
      <TextField
        id="search"
        label="Search"
        variant="filled"
        sx={{
          backgroundColor: "#61dafbaa",
        }}
        onChange={handleChange}
        value={search}
      />
    </>
  );
};

export default SearchComponent;
