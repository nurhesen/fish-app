import { combineReducers } from "redux";
import {
  fishFormReducer,
  fishFormResultReducer,
  fishCsvReducer,
} from "./FormReducers";

export default combineReducers({
  fishForm: fishFormReducer,
  fishFormResult: fishFormResultReducer,
  fishCsv: fishCsvReducer,
});
