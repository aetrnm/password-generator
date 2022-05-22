import React from "react";

import Typography from "@mui/material/Typography";

function Title() {
  return (
    <div style={{ marginTop: 60, marginBottom: 60 }}>
      <Typography variant="h2" component="div" gutterBottom>
        Random Password Generator
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        Create strong and secure passwords to keep your account safe online.
      </Typography>
    </div>
  );
}

export default Title;
