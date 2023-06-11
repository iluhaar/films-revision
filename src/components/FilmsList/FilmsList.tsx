import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { ListItemText } from "@mui/material";

const FilmsList = ({ films }: FilmsListProps) => {
  return (
    <List sx={{ width: "100%", maxWidth: "50vw", bgcolor: "black" }}>
      {films.length > 0 &&
        films.map((film) => (
          <Link key={film.id} to={film.id.toString()}>
            <ListItem className="film-item">
              <ListItemText primary={film.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Link>
        ))}
    </List>
  );
};

export default FilmsList;
