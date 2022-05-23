import React from 'react';

import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';

function BottomCenterAlert({
  isShown,
  onClose,
  alertMessage,
  autoHideDuration,
}) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isShown}
        onClose={onClose}
        TransitionComponent={Slide}
        autoHideDuration={autoHideDuration}
      >
        <Alert variant='filled' severity='success' color='success'>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default BottomCenterAlert;
