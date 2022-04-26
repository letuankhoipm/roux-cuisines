import { GET_USER_INFO } from "src/constants/action.const";

export const setUserInfo = (res: object) => {
  return (dispatch: any) => {
    const arr = {
      type: GET_USER_INFO,
      value: res,
    };
    dispatch(arr);
  };
};
