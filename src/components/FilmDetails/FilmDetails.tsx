import type { RootState } from "../../store/store";

import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { toggleReviewForm } from "../../store/reducers/uiSlice";
import { selectItemById } from "../../store/selectors/filmsSelectors";

import RatingComponent from "./RatingComponent/RatingComponent";
import WatchedSwitch from "./WatchedSwitch/WatchedSwitch";
import ReviewForm from "./ReviewForm/ReviewForm";
import { FilmPosterComponent } from "../FilmPosterComponent/FilmPosterComponent";

const FilmDetails = () => {
  const { id } = useParams();
  const { imagePlaceholder } = useSelector((state: RootState) => state.films);

  const { showReviewForm } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const film = useSelector((state: RootState) => selectItemById(state.films, id ? id : 1));

  const onClickHandler = () => {
    dispatch(toggleReviewForm());
  };

  if (film) {
    const { id, name, grade, isWatched, review, img } = film;

    return (
      <div>
        <Link to="/films">
          <button>Back to all films</button>
        </Link>
        <>
          <FilmPosterComponent alt={name} src={img !== "" ? img : imagePlaceholder} isWatched={isWatched} />
          <h2>{name}</h2>
        </>
        <>
          <WatchedSwitch id={id} isWatched={isWatched} />
          {isWatched ? "watched" : " not watched"}
          {isWatched && (
            <div>
              <button onClick={onClickHandler}>{!showReviewForm ? "Add Review" : "X"}</button>
              {showReviewForm && <ReviewForm id={id} />}
              {review && <p>{review}</p>}
            </div>
          )}
        </>
        <RatingComponent grade={grade} id={id} />
      </div>
    );
  }
};

export default FilmDetails;
