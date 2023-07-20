import type { ChangeEvent } from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import usePagination from "../../hooks/Paganation";

import { ListItemAvatar, ListItemText, Pagination, List, ListItem, Divider, Box, Container } from "@mui/material";
import { FilmPosterComponent } from "../FilmPosterComponent/FilmPosterComponent";
import FilterWatched from "../UI/FilterWatched";
import SearchComponent from "../UI/SearchComponent/SearchComponent";

const FilmsList = ({ films }: FilmsListProps) => {
  const { imagePlaceholder } = useSelector((state: RootState) => state.films);

  const [page, setPage] = useState(1);

  const PER_PAGE = 24;

  const count = Math.ceil(films.length / PER_PAGE);
  const _DATA = usePagination(films, PER_PAGE);

  const handleChange = (e: ChangeEvent<unknown>, p: number) => {
    e.preventDefault();

    setPage(p);
    _DATA.jump(p);
  };

  const paginationData = _DATA.currentData();

  return (
    <>
      {paginationData.length > 0 && (
        <Container fixed sx={{ width: "100%" }}>
          <List
            sx={{
              width: "100%",
              marginTop: "10rem",
              bgcolor: "black",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              padding: "5rem",
              height: "auto",
              minWidth: "100%",
              minHeight: "560px",
            }}
          >
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: "1rem" }}>
              <FilterWatched />
              <SearchComponent />
              <br />
            </Box>

            {paginationData.map((film: FilmProps) => (
              <Link key={film.id} to={film.id.toString()}>
                <ListItem className="film-item">
                  <ListItemAvatar>
                    <FilmPosterComponent
                      src={film.img !== "" ? film.img : imagePlaceholder}
                      alt={film.name}
                      isWatched={film.isWatched}
                    />
                  </ListItemAvatar>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <ListItemText
                    sx={{ padding: "0.5rem", textTransform: "capitalize" }}
                    primary={film.name.replace(/#фильм/g, "")}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </Link>
            ))}
          </List>
          <div className="pagination__wrapper">
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              color="primary"
              showFirstButton
              showLastButton
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default FilmsList;
