import * as CryptoJS from 'crypto-js';
import { AuthState } from 'src/app/core/interfaces/authState';

const AUTH_KEY = 'auth-state';

export function getAuthState() {
  const encryptAuthState: any = localStorage.getItem(AUTH_KEY);
  const data = CryptoJS.AES.decrypt(
    decodeURIComponent(encryptAuthState),
    'secret_key'
  );
  const decryptedAuthState = data.toString(CryptoJS.enc.Utf8);
  return encryptAuthState ? JSON.parse(decryptedAuthState) : {};
}

export function saveAuthState(authState: AuthState): void {
  const encryptAuthState = encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(authState), 'secret_key').toString()
  );
  localStorage.setItem(AUTH_KEY, encryptAuthState);
}

export function clearAuthState(): void {
  localStorage.removeItem(AUTH_KEY);
}
