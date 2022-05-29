import React from "react";

import { red } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { green } from "@mui/material/colors";

import passwordTypes from "../tools/passwordTypes";
``
function MyBadge({ passwordType }) {
  let backgroundColor;
  switch (passwordType) {
    case passwordTypes.weak:
      backgroundColor = red[600];
    case passwordTypes.good:
      backgroundColor = yellow[700];
    case passwordTypes.strong:
      backgroundColor = green[500];
    case passwordTypes.veryStrong:
      backgroundColor = blue[600];
    case passwordTypes.godlike:
      backgroundColor = red[200];
    default:
      break;
  }

  return (
    <div
      style={{
        backgroundColor,
        ...defaultStyles,
      }}
    >
      {passwordType.toUpperCase()}!!!
    </div>
  );
}

const defaultStyles = {
  color: "white",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: 16,
  paddingLeft: 14,
  paddingRight: 10,
  paddingTop: 5,
  paddingBottom: 5,
  letterSpacing: 4,
};

export default MyBadge;
