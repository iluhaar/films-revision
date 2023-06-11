import FilmDetails from "../FilmDetails/FilmDetails";

const FilmsList = ({ films }: FilmsListProps) => {
  return <>{films.length > 0 && films.map((film) => <FilmDetails key={film.id} {...film} />)}</>;
};

export default FilmsList;
