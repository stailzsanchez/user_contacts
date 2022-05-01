import { AppDispatch } from "../../index";
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";
import UserService from "../../../api/UserService";
import { IUser } from "../../../models/IUser";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login: (user: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsLoading(true));
    setTimeout(async () => {
      try {
        const { data } = await UserService.auth(user);

        // ///////// gh-pages /////////
        // const data = UserService.auth(user);
        // ///////// gh-pages /////////

        if (!data.length) {
          dispatch(
            AuthActionCreators.setError("Incorrect username or password")
          );
          return;
        }

        const userData = data[0];
        if (password === userData.password) {
          userData.password = "secret";
          localStorage.setItem("user", JSON.stringify(userData));
          dispatch(AuthActionCreators.setUser(userData));
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setError(""));
        } else {
          dispatch(
            AuthActionCreators.setError("Incorrect username or password")
          );
        }
      } catch (e) {
        dispatch(AuthActionCreators.setError("Login error"));
      } finally {
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    }, 1000);
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("user");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
