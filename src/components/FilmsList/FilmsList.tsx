import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import usePagination from "../../hooks/Paganation";

import { ListItemAvatar, ListItemText, Pagination, List, ListItem, Divider } from "@mui/material";
import { FilmPosterComponent } from "../FilmPosterComponent/FilmPosterComponent";

const FilmsList = ({ films }: FilmsListProps) => {
  const { imagePlaceholder } = useSelector((state: RootState) => state.films);

  const [page, setPage] = useState(1);

  const PER_PAGE = 10;

  const count = Math.ceil(films.length / PER_PAGE);
  const _DATA: any = usePagination(films, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  const paginationData = _DATA.currentData();

  return (
    <>
      <List sx={{ width: "100%", maxWidth: "50vw", marginTop: "10rem", bgcolor: "black" }}>
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
              <ListItemText primary={film.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Link>
        ))}
      </List>
      <>
        <Pagination count={count} page={page} onChange={handleChange} />
      </>
    </>
  );
};

export default FilmsList;
