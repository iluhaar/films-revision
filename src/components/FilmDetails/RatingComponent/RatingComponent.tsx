import type { MouseEvent } from "react";

import { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { setGrade } from "../../../store/reducers/filmsSlice";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function RatingComponent({ grade, id }: RatingComponent) {
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);
  const dispatch = useDispatch();

  const setRatingHandler = (value: MouseEvent<HTMLElement>) => {
    const rating = (value.currentTarget as HTMLInputElement).value || 0;

    dispatch(setGrade({ id, value: rating }));
  };

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={grade ? grade : value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(_event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        onClick={(event) => setRatingHandler(event)}
      />
      {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
    </Box>
  );
}

interface RatingComponent {
  id: number;
  grade: number | null;
}

// const labels: { [index: string]: string } = {
//   0.5: "Useless",
//   1: "Useless+",
//   1.5: "Poor",
//   2: "Poor+",
//   2.5: "Ok",
//   3: "Ok+",
//   3.5: "Good",
//   4: "Good+",
//   4.5: "Excellent",
//   5: "Excellent+",
// };
