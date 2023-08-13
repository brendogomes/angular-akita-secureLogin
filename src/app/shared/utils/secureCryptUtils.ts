import * as CryptoJS from 'crypto-js';

export class SecureCryptUtils {
  static encrypt(data: any, key: string): string {
    const encryptData = encodeURIComponent(
      CryptoJS.AES.encrypt(JSON.stringify(data), key).toString()
    );
    return encryptData;
  }

  static decrypted(encryptedData: string, key: string): any {
    const data = CryptoJS.AES.decrypt(decodeURIComponent(encryptedData), key);
    const decryptedAuthState = data.toString(CryptoJS.enc.Utf8);
    return encryptedData ? JSON.parse(decryptedAuthState) : {};
  }
}
