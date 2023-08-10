import { AuthUser } from './authUser';

export interface AuthState {
  user: AuthUser;
  token: string;
  refreshToken: string;
}
