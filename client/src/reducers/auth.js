import { LOGOUT, LOGIN } from "../constants/actionTypes";

const authReducer = (
  state = {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  action
) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.clear();
      return { ...state, token: null, user: null };
    case LOGIN:
      const { token, user } = action.payload;
      window.location.hash = "";
      window.localStorage.setItem("user", JSON.stringify(user));
      return { ...state, token: token, user: user };
    default:
      return state;
  }
};

export default authReducer;
