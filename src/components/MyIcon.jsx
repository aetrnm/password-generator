import React from "react";

import Icon from "./Icon";

import passwordTypes from "../tools/passwordTypes";

import weakIcon from "../imgs/weak.svg";
import goodIcon from "../imgs/good.svg";
import strongIcon from "../imgs/strong.svg";
import veryStrongIcon from "../imgs/verystrong.svg";
import godLikeIcon from "../imgs/godlike.svg";

function MyIcon({ passwordType }) {
  switch (passwordType) {
    case passwordTypes.weak:
      return <Icon src={weakIcon} />;
    case passwordTypes.good:
      return <Icon src={goodIcon} />;
    case passwordTypes.strong:
      return <Icon src={strongIcon} />;
    case passwordTypes.veryStrong:
      return <Icon src={veryStrongIcon} />;
    case passwordTypes.godLike:
      return <Icon src={godLikeIcon} />;

    default:
      break;
  }
}

export default MyIcon;
