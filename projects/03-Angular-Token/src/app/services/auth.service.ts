import { AuthAdapter } from '@/adapters';
import { AuthData, LoginResponse } from '@/models';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = "http://localhost:4000/auth"//should be obtain from proccess.env
  http = inject(HttpClient)
  login(user: AuthData): Observable<string>{
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`,user).pipe(
      // map((data: LoginResponse) => AuthAdapter(data))
      map(AuthAdapter)
    )
  }

  register(user: AuthData): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/register`,user)
  }
}
