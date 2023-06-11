import RatingComponent from "./RatingComponent/RatingComponent";

const FilmDetails = ({ name, grade, review, id, isWatched }: FilmProps) => {
  return (
    <div>
      {id}
      <h2>{name}</h2>
      <>
        {isWatched ? " watched" : " not watched"}
        {review}
      </>
      <RatingComponent grade={grade} />
    </div>
  );
};

export default FilmDetails;
