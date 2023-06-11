import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";

export const Notification = () => {
  const [open, setOpen] = useState(false);
  const { status, message, title, type, show } = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const severity = status === "success" ? "success" : "error";

  const color = type === "info" ? "info" : "error";

  return (
    <>
      {show && (
        <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
          <Alert severity={severity} color={color}>
            <h3>{title}</h3>
            <p>{message}</p>
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
