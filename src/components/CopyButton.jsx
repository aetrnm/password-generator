import React from "react";

import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function CopyButton({ onClick }) {
  return (
    <>
      <Button
        variant="contained"
        onClick={onClick}
        size="large"
        startIcon={<ContentCopyIcon />}
      >
        Copy
      </Button>
    </>
  );
}

export default CopyButton;
