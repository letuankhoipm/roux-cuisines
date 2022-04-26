import { combineReducers } from "redux";
import Auth from "./auth.reducer";
import Preloaded from "./preloaded.reducer";

export default combineReducers({
  Preloaded,
  Auth,
});
