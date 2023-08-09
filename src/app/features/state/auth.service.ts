import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore, private http: HttpClient) {
  }


}
