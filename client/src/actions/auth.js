import { LOGOUT, LOGIN } from "../constants/actionTypes";

export const login = (token) => (dispatch) => {
  try {
    dispatch({ type: LOGIN, payload: token });
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
