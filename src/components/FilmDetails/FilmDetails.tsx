import type { RootState } from "../../store/store";

import { useState } from "react";

import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { toggleReviewForm } from "../../store/reducers/uiSlice";
import { selectItemById } from "../../store/selectors/filmsSelectors";

import RatingComponent from "./RatingComponent/RatingComponent";
import WatchedSwitch from "./WatchedSwitch/WatchedSwitch";
import ReviewForm from "./ReviewForm/ReviewForm";
import { FilmPosterComponent } from "../FilmPosterComponent/FilmPosterComponent";
import ModalWrapper from "../UI/Modals/ImageModal";

const FilmDetails = () => {
  const [showFullImg, setShowFullImg] = useState(false);

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
      <>
        {showFullImg && (
          <ModalWrapper setIsOpen={setShowFullImg}>
            <img src={img !== "" ? img : imagePlaceholder} className="" />
          </ModalWrapper>
        )}
        <div className="film-details">
          <Link to="/films-revision/films">
            <button>Back to all films</button>
          </Link>
          <div className="film-details-info">
            <FilmPosterComponent
              alt={name}
              src={img !== "" ? img : imagePlaceholder}
              isWatched={isWatched}
              showImage={setShowFullImg}
            />
            <h2>{name.replace(/#фильм/g, "")}</h2>
          </div>
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
          {isWatched && <RatingComponent grade={grade} id={id} />}
        </div>
      </>
    );
  }
};

export default FilmDetails;
