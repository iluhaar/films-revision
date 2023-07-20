import { SyntheticEvent, useEffect, useState } from "react";
import ModalWrapper from "../UI/Modals/Modal";
import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";

import styles from "./edit.module.css";
import { useDispatch } from "react-redux";

import { updateFilmData } from "../../store/reducers/filmsSlice";

const EditFilmComponent = ({ film }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filmName, setFilmName] = useState("");
  const [grade, setGrade] = useState<number | null>(0);
  const [imgURL, setImgURL] = useState("");
  const [review, setReview] = useState("");
  const [isWatched, setIsWatched] = useState(false);

  const dispatch = useDispatch();

  const handleIsWatched = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsWatched(event.target.checked);
  };

  const handlerSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(updateFilmData({ id: film.id, name: filmName, grade, img: imgURL, review, isWatched }));

    setIsOpen(false);
  };

  useEffect(() => {
    setFilmName(film.name);
    setGrade(film.grade);
    setImgURL(film.img);
    setReview(film.review);
    setIsWatched(film.isWatched);
  }, [film.grade, film.img, film.isWatched, film.name, film.review]);

  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Edit</button>}

      {isOpen && (
        <ModalWrapper setIsOpen={setIsOpen}>
          <Box component="form" onSubmit={handlerSubmit}>
            <Typography variant="h3" sx={{ color: "#f3f3f3", paddingBottom: "1rem" }}>
              Edit film/series
            </Typography>
            <div className={styles.edit__wrapper}>
              <TextField
                required
                id="outlined-required"
                label="Film/Series Name"
                defaultValue={filmName}
                value={film.name === "" ? filmName : film.name}
                onChange={(e) => setFilmName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Grade"
                defaultValue={grade}
                type="text"
                onChange={(e) => setGrade(Number(e.target.value))}
              />
              <TextField
                required
                id="outlined-required"
                label="Image url"
                defaultValue={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={isWatched} onChange={handleIsWatched} />}
                label="Watched?"
              />
              {isWatched && (
                <TextField
                  required
                  id="outlined-required"
                  label="Review"
                  defaultValue={review}
                  onChange={(e) => setReview(e.target.value)}
                />
              )}
            </div>

            <button type="submit" onClick={handlerSubmit}>
              Update
            </button>
          </Box>
        </ModalWrapper>
      )}
    </>
  );
};

export default EditFilmComponent;

interface Props {
  film: FilmProps;
}
