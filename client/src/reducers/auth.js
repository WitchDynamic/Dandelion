import { LOGOUT, LOGIN } from "../constants/actionTypes";

const authReducer = (state = "", action) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.clear();
      return "";
    case LOGIN:
      window.location.hash = "";
      window.localStorage.setItem("token", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
