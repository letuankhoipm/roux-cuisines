export interface User {
  id: number;
  fullname: string;
  username: string;
  password: string;
  email: string;
  token: string;
  location: string;
  createAt: string;
}

export interface AuthStateProps {
  userinfo: User;
}
