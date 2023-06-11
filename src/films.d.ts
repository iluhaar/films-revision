interface FilmsListProps {
  films: FilmProps[];
}

interface FilmProps {
  id: number;
  name: string;
  isWatched: boolean;
  grade: number | null;
  review: string;
  img: string;
}

interface Grade {
  grade: number | null;
}
