import { CheckPlatformUtility } from '@/utilities';
import { inject, Injectable } from '@angular/core';

export enum LocalKeys {
  token = "token"
}

@Injectable({
  providedIn: 'root'
})
export class LocalManagerService {
  checkPlatform = inject(CheckPlatformUtility)

  getElement(key:LocalKeys):string | null {
    if(this.checkPlatform.checkIfServer()) return null;
    
    return localStorage.getItem(key);
  }

  setElement(key:LocalKeys, value: string ) : void {
    if(this.checkPlatform.checkIfServer()) localStorage.setItem(key, value);
  }

  clearStorage(): void {
    if(this.checkPlatform.checkIfServer()) localStorage.clear();
  }
}

