import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthStore } from './auth.store';
import { AuthState } from 'src/app/core/interfaces/authState';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  constructor(protected override store: AuthStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return toBoolean(this.getValue().token);
  }
}
