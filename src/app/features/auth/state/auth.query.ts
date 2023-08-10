import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStore } from './auth.store';
import { AuthState } from 'src/app/core/interfaces/authState';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  constructor(protected override store: AuthStore) {
    super(store);
  }
}
