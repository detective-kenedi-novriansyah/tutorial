import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

const Validate = ({ openValidate, onClose }) => {
  return (
    <Snackbar open={openValidate} onClose={onClose}>
      <Alert onClose={onClose} severity="error">
        Maaf foto anda tidak ada silahkan masukkin foto anda
      </Alert>
    </Snackbar>
  );
};

export default Validate;
