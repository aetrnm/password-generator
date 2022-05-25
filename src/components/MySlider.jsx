import { Slider } from "@mui/material";
import React from "react";
import { marks } from "../tools/passwordSliderMarks";

function MySlider({ passwordLength, onChange }) {
  return (
    <>
      <Slider
        aria-label="Password Length"
        defaultValue={16}
        value={passwordLength}
        step={1}
        marks={marks}
        min={1}
        max={30}
        onChange={onChange}
      />
    </>
  );
}

export default MySlider;
