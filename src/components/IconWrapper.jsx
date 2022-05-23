import React from 'react';

import Icon from './Icon';

import passwordTypes from '../tools/passwordTypes';

import weakIcon from '../imgs/weak.svg';
import goodIcon from '../imgs/good.svg';
import strongIcon from '../imgs/strong.svg';
import veryStrongIcon from '../imgs/verystrong.svg';
import godlikeIcon from '../imgs/godlike.svg';

function IconWrapper({ passwordType }) {
  let src;

  switch (passwordType) {
    case passwordTypes.weak:
      src = weakIcon;
      break;
    case passwordTypes.good:
      src = goodIcon;
      break;
    case passwordTypes.strong:
      src = strongIcon;
      break;
    case passwordTypes.veryStrong:
      src = veryStrongIcon;
      break;
    case passwordTypes.godlike:
      src = godlikeIcon;
      break;
    default:
      break;
  }

  return <Icon src={src} />;
}

export default IconWrapper;
