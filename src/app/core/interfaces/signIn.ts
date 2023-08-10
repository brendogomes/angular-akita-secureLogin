import { AuthUser } from "./authUser";

export interface signIn {
  user: AuthUser;
  token: string;
  refreshToken: string;
}
