import { AuthState } from 'src/app/core/interfaces/authState';
import { SecureCryptUtils } from 'src/app/shared/utils/secureCryptUtils';
import { environment } from 'src/environments/environment';

const AUTH_KEY = 'auth-state';

export function getAuthState() {
  const encryptedData = localStorage.getItem(AUTH_KEY);
  if (encryptedData) {
    const decryptedAuthState = SecureCryptUtils.decrypted(
      encryptedData,
      environment.SECRET_KEY
    );
    return decryptedAuthState;
  }
}

export function saveAuthState(authState: AuthState): void {
  const encryptAuthState = SecureCryptUtils.encrypt(
    authState,
    environment.SECRET_KEY
  );
  localStorage.setItem(AUTH_KEY, encryptAuthState);
}

export function clearAuthState(): void {
  localStorage.removeItem(AUTH_KEY);
}
