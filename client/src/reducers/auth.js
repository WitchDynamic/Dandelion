import { LOGOUT } from "../constants/actionTypes";

const authReducer = (state = localStorage.getItem("accessToken"), action) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.clear();
      return null;
    default:
      return state;
  }
};

export default authReducer;
