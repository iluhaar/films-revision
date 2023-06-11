import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addReview } from "../../../store/reducers/filmsSlice";
import { useState } from "react";
import { toggleReviewForm } from "../../../store/reducers/uiSlice";

type Props = {
  id: number;
};

const ReviewForm = ({ id }: Props) => {
  const [reviewText, setReviewText] = useState<string>();

  const dispatch = useDispatch();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    dispatch(addReview({ id, review: reviewText }));
    dispatch(toggleReviewForm());
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <>
        <TextField
          id="filled-multiline-static"
          label="Review"
          multiline
          rows={4}
          onChange={(e) => setReviewText(e.target.value)}
          defaultValue={reviewText}
          variant="filled"
          placeholder="Write a review.."
        />
        <button onClick={onSubmitHandler}>Add</button>
      </>
    </Box>
  );
};

export default ReviewForm;
