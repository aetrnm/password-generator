import React from "react";

function Icon({ src }) {
  return (
    <div>
      <img src={src} alt="SVG logo" style={{ width: 300, height: 300 }} />
    </div>
  );
}

export default Icon;
