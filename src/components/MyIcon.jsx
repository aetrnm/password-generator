import React from "react";

import Icon from "./Icon";

import passwordTypes from "../tools/passwordTypes";

import weakIcon from "../imgs/weak.svg";
import goodIcon from "../imgs/good.svg";
import strongIcon from "../imgs/strong.svg";
import veryStrongIcon from "../imgs/verystrong.svg";
import godLikeIcon from "../imgs/godlike.svg";

function MyIcon({ passwordType }) {
  let itemToReturn = null;

  switch (passwordType) {
    case passwordTypes.weak:
      itemToReturn = <Icon src={weakIcon} />;
      break;
    case passwordTypes.good:
      itemToReturn = <Icon src={goodIcon} />;
      break;
    case passwordTypes.strong:
      itemToReturn = <Icon src={strongIcon} />;
      break;
    case passwordTypes.veryStrong:
      itemToReturn = <Icon src={veryStrongIcon} />;
      break;
    case passwordTypes.godLike:
      itemToReturn = <Icon src={godLikeIcon} />;
      break;
    default:
      break;
  }

  return itemToReturn;
}

export default MyIcon;
