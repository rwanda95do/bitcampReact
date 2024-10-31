import { combineReducers } from "redux";

import color from "./modules/color.jsx";
import count from "./modules/count.jsx";
import animal from "./modules/animal.jsx";

export default combineReducers({
  // 이름(쓰고싶은변수명) : 값(리듀서이름)
  angel: color,
  count: count,
  animal: animal,
});
