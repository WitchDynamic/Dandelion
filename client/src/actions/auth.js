import { LOGOUT, LOGIN } from "../constants/actionTypes";

export const login = (token, user) => (dispatch) => {
  try {
    dispatch({ type: LOGIN, payload: { token, user } });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
