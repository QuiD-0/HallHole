import React from "react";

import { TextField } from "@mui/material";

export default function Input(props) {
  if (props.size === "large") {
    return <TextField sx={{ m:0.75, width: '75%' }} variant="outlined" color="primary" OnKeyPress={props.OnKeyPress} />
  } else if (props.size === "medium") {
    return <TextField sx={{ m:0.75, width: '50%' }} variant="outlined" color="primary" OnKeyPress={props.OnKeyPress} />
  } else {
    return <TextField sx={{ m:0.75, width: '25%' }} variant="outlined" color="primary" OnKeyPress={props.OnKeyPress} />
  }
}