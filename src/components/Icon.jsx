import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

function Icon({ src }) {
  const matches = useMediaQuery('(min-width:1200px)');
  const size = matches ? 300 : 200;
  return (
    <div>
      <img src={src} alt='SVG logo' height={size} width={size} />
    </div>
  );
}

export default Icon;
