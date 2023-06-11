import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { setIsWatched } from "../../../store/reducers/filmsSlice";

export default function WatchedSwitch({ id, isWatched }: WatchedSwitch) {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setIsWatched(id));
  };

  return <Switch checked={isWatched} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />;
}

interface WatchedSwitch {
  id: number;
  isWatched: boolean;
}
