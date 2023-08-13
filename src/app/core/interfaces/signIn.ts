import { AuthUser } from "./authUser";

export interface SignIn {
  user: AuthUser;
  token: string;
  refreshToken: string;
}
