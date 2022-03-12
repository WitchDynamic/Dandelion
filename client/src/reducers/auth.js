import { LOGOUT, SET_TOKEN } from "../constants/actionTypes";

const authReducer = (state = localStorage.getItem("accessToken"), action) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.clear();
      return null;
    case SET_TOKEN:
      window.location.hash = "";
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
