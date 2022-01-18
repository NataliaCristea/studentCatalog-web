
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from './cookie.service';
import {Observable} from 'rxjs';
import {LoginResponse} from '../model/LoginRegister';
import {RegisterRequest} from '../model/RegisterRequest';
import {RegisterResponse} from '../model/RegisterResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private prefix = 'http://localhost:8081';
  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService) {}

  public login(loginRequest: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.prefix + '/login', loginRequest);
  }

  public register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.prefix + '/register', registerRequest);
  }

  public isUserAuthenticated() {
    return this.cookieService.hasJWTCookie();
  }

  public logoutUser() {
    this.cookieService.clearCookies();
  }
}
