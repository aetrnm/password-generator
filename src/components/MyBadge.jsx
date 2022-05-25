import React from "react";

import { red } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { green } from "@mui/material/colors";

import passwordTypes from "../tools/passwordTypes";

function MyBadge({ passwordType }) {
  switch (passwordType) {
    case passwordTypes.weak:
      return (
        <div
          style={{
            backgroundColor: red[600],
            ...defaultStyles,
          }}
        >
          {passwordType.toUpperCase()}
        </div>
      );
    case passwordTypes.good:
      return (
        <div
          style={{
            backgroundColor: yellow[700],
            ...defaultStyles,
          }}
        >
          {passwordType.toUpperCase()}
        </div>
      );
    case passwordTypes.strong:
      return (
        <div
          style={{
            backgroundColor: green[500],
            ...defaultStyles,
          }}
        >
          {passwordType.toUpperCase()}
        </div>
      );
    case passwordTypes.veryStrong:
      return (
        <div
          style={{
            backgroundColor: blue[600],
            ...defaultStyles,
          }}
        >
          {passwordType.toUpperCase()}
        </div>
      );
    case passwordTypes.godlike:
      return (
        <div
          style={{
            backgroundColor: blue[200],
            ...defaultStyles,
          }}
        >
          {passwordType.toUpperCase()}!!!
        </div>
      );

    default:
      break;
  }
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
