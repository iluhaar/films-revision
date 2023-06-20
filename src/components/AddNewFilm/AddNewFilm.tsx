import type { SyntheticEvent } from "react";
import { useState } from "react";

import { Box, Checkbox, TextField, FormControlLabel } from "@mui/material";

import ModalWrapper from "../UI/Modals/Modal";
import { useDispatch } from "react-redux";
import { addNewFilm } from "../../store/reducers/filmsSlice";

const AddNewFilm = () => {
  const [filmName, setFilmName] = useState("");
  const [grade, setGrade] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [review, setReview] = useState("");
  const [isWatched, setIsWatched] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleIsWatched = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsWatched(event.target.checked);
  };

  const handlerSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(addNewFilm({ name: filmName, grade, img: imgURL, review, isWatched }));
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Add new film/series</button>}
      {isOpen && (
        <ModalWrapper setIsOpen={setIsOpen}>
          <Box component="form" onSubmit={handlerSubmit}>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Film/Series Name"
                defaultValue=""
                onChange={(e) => setFilmName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Grade"
                defaultValue=""
                type="text"
                onChange={(e) => setGrade(Number(e.target.value))}
              />
              <TextField
                required
                id="outlined-required"
                label="Image url"
                defaultValue=""
                onChange={(e) => setImgURL(e.target.value)}
              />
              <FormControlLabel control={<Checkbox defaultChecked onChange={handleIsWatched} />} label="Watched?" />
              {isWatched && (
                <TextField
                  required
                  id="outlined-required"
                  label="Review"
                  defaultValue=""
                  onChange={(e) => setReview(e.target.value)}
                />
              )}
            </div>
          </Box>
          <button>Add new film/series</button>
        </ModalWrapper>
      )}
    </>
  );
};

export default AddNewFilm;
