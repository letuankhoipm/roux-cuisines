import { AuthStateProps } from "src/types/user.type";
import { IAction } from "src/types/common.type";
import { GET_USER_INFO } from "src/constants/action.const";

export const defaultAuthState: AuthStateProps = {
  userinfo: {
    id: 0,
    fullname: "",
    createAt: "",
    email: "",
    location: "",
    password: "",
    token: "",
    username: "",
  },
};

const initAuthStates = (
  state = defaultAuthState,
  action: IAction
): AuthStateProps => {
  switch (action.type) {
    case GET_USER_INFO:
      const obj: AuthStateProps = JSON.parse(JSON.stringify(state));
      obj.userinfo.username = action.value._loginName;
      obj.userinfo.password = action.value._password;
      return obj;
    default:
      return state;
  }
};

export default initAuthStates;
