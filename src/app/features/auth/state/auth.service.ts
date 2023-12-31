import { Injectable } from '@angular/core';
import { ResponseBase } from 'src/app/core/interfaces/responseBase';
import { SignIn } from 'src/app/core/interfaces/signIn';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  signIn(userName: string, password: string): ResponseBase<SignIn> {
    const fakeResponse = {
      data: {
        user: { 
          userName: userName,
          email: 'user@email.com',
          role: 'admin',
        },
        token: 'token',
        refreshToken: 'refreshToken',
      },
      message: 'successful login',
    };
    return fakeResponse;
  }
}
