import { LOGOUT } from "../constants/actionTypes";

export const logout = () => (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
