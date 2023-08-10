import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as authStorage from '../auth-storage';
import { AuthState } from 'src/app/core/interfaces/authState';

export function createInitialState(): AuthState {
  return {
    user: null,
    token: null,
    refreshToken: null,
    ...authStorage.getAuthState(),
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }

  setAuthState(authState: AuthState): void {
    this.update(authState);
    authStorage.saveAuthState(authState);
  }

  clearAuthState(): void {
    authStorage.clearAuthState();
    this.update(createInitialState());
  }
}
