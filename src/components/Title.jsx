import React from "react";

import Typography from "@mui/material/Typography";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme, { factor: 5 });

function Title() {
  return (
    <div style={{ marginTop: 20, marginBottom: 60 }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" component="div" gutterBottom>
          Random Password Generator
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Create strong and secure passwords to keep your account safe online.
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Title;
