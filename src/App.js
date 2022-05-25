import React, { useEffect, useState } from "react";
import generatePassword from "generate-simple-password";

import { Grid, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import Title from "./components/Title";
import MyBadge from "./components/MyBadge";
import CopyButton from "./components/CopyButton";
import BottomCenterAlert from "./components/BottomCenterAlert";
import MySlider from "./components/MySlider";
import CenteredContainer from "./components/CenteredContainer";
import IconWrapper from "./components/IconWrapper";

import passwordTypes from "./tools/passwordTypes";

function App() {
  const [passwordType, setPasswordType] = useState(passwordTypes.strong);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [isShownSnackbar, setIsShownSnackbar] = useState(false);

  useEffect(() => {
    setPassword(
      generatePassword({
        length: passwordLength,
        addUppercase: true,
        addLowercase: true,
        addNumbers: true,
        addSpecialChars: true,
      })
    );
  }, []);

  function handlePasswordType(passwordLength) {
    if (passwordLength < 10) {
      setPasswordType(passwordTypes.weak);
      return;
    }
    if (passwordLength < 16) {
      setPasswordType(passwordTypes.good);
      return;
    }
    if (passwordLength < 24) {
      setPasswordType(passwordTypes.strong);
      return;
    }
    if (passwordLength < 30) {
      setPasswordType(passwordTypes.veryStrong);
      return;
    }
    if (passwordLength === 30) {
      setPasswordType(passwordTypes.godlike);
      return;
    }
  }

  const handleSliderChange = (event, newLength) => {
    setPasswordLength(newLength);
    handlePasswordType(newLength);
    setPassword(
      generatePassword({
        length: passwordLength,
        addUppercase: true,
        addLowercase: true,
        addNumbers: true,
        addSpecialChars: true,
      })
    );
  };

  function handleCloseAlert() {
    setIsShownSnackbar(false);
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(password);
    setIsShownSnackbar(true);
  }

  return (
    <CenteredContainer>
      <Title />
      <Grid
        container
        spacing={2}
        style={{
          width: "80vw",
          marginBottom: 60,
        }}
      >
        <Grid item xs={12} lg={5}>
          <IconWrapper passwordType={passwordType} />
        </Grid>
        <Grid item xs={12} lg={7}>
          <CenteredContainer>
            <OutlinedInput
              id="password-field"
              readOnly
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <MyBadge passwordType={passwordType} />
                </InputAdornment>
              }
              fullWidth
            />
            <div>
              Password length: <strong>{passwordLength}</strong>
            </div>
            <MySlider
              passwordLength={passwordLength}
              onChange={handleSliderChange}
            />
            <CopyButton onClick={handleCopyClick} />
          </CenteredContainer>
        </Grid>
      </Grid>
      <BottomCenterAlert
        isShown={isShownSnackbar}
        onClose={handleCloseAlert}
        alertMessage="Copied successfully"
        autoHideDuration={2000}
      />
    </CenteredContainer>
  );
}

export default App;
