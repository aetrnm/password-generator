import React from 'react';

function CenteredContainer(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      {props.children}
    </div>
  );
}

export default CenteredContainer;
