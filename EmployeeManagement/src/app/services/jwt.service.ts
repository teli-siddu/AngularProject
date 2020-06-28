import { Injectable } from '@angular/core';
import { LoginViewModel } from '../models/login-view-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccessToken } from '../models/access-token.model';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) { }

  async authenticate(loginViewModel: LoginViewModel) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<AccessToken>(`${this.baseUrl}/api/Account/Authenticate`, loginViewModel, httpOptions).toPromise()
  }

  async setToken(accessToken: AccessToken) {
    if (typeof accessToken?.Token != null && accessToken) {
      localStorage.setItem("access_token", accessToken.Token);
    }
  }

  async getToken() {
    return localStorage.getItem("access_token")
  }

  async removeToken() {
    localStorage.removeItem("access_token");
  }
  async isAuthenticated() {
    const token = localStorage.getItem("access_token");

    return !this.jwtHelper.isTokenExpired(token)

  }
}
