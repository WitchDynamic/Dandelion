import { LOGOUT, SET_TOKEN } from "../constants/actionTypes";

export const setToken = (token) => (dispatch) => {
  try {
    dispatch({ type: SET_TOKEN, payload: token });
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
