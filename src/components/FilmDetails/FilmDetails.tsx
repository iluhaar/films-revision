import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { toggleReviewForm } from "../../store/reducers/uiSlice";
import { selectItemById } from "../../store/selectors/filmsSelectors";
import type { RootState } from "../../store/store";

import RatingComponent from "./RatingComponent/RatingComponent";
import WatchedSwitch from "./WatchedSwitch/WatchedSwitch";
import ReviewForm from "./ReviewForm/ReviewForm";
import { useEffect } from "react";

const FilmDetails = () => {
  const { id } = useParams();

  const { showReviewForm } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const film = useSelector((state: RootState) => selectItemById(state.films, id ? id : 1));
  useEffect(() => {
    console.log("🚀 ~ file: FilmDetails.tsx:19 ~ FilmDetails ~ {film}:", { film });
  }, [film, id]);

  const onClickHandler = () => {
    dispatch(toggleReviewForm());
  };

  if (film) {
    const { id, name, grade, isWatched, review } = film;

    return (
      <div>
        {id}
        <h2>{name}</h2>
        <>
          <WatchedSwitch id={id} isWatched={isWatched} />
          {isWatched ? " watched" : " not watched"}
          {isWatched && (
            <div>
              'review:'
              <button onClick={onClickHandler}>{!showReviewForm ? "Add Review" : "X"}</button>
              {showReviewForm && <ReviewForm id={id} />}
              {review && <p>{review}</p>}
            </div>
          )}
        </>
        <RatingComponent grade={grade} />
      </div>
    );
  }
};

export default FilmDetails;
