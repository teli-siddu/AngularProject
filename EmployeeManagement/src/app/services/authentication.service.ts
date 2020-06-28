import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccessToken } from '../models/access-token.model';
import { LoginViewModel } from '../models/login-view-model';
import { map, catchError } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { EmployeeViewModel } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticated = new BehaviorSubject<boolean>(false)
  private User = new BehaviorSubject<EmployeeViewModel>(null)
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService, private router: Router) { }

  authenticate(loginViewModel: LoginViewModel) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<AccessToken>(`${this.baseUrl}/api/Account/Authenticate`, loginViewModel, httpOptions)
      .pipe(
        // catchError((error) => {
        //   return throwError(error)
        // }),
        map(token => {
          if (typeof token != undefined && token) {
            this.setToken(token)
            this.authenticated.next(true)
          }
          return token
        }),
        catchError(this.handleError("authenticate", null))
      )

  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // throwError(error)
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
  setToken(accessToken: AccessToken) {
    if (typeof accessToken?.Token != null && accessToken) {
      localStorage.setItem("access_token", accessToken.Token);
      localStorage.setItem("User", JSON.stringify(accessToken.User));
    }
  }


  getToken() {
    return localStorage.getItem("access_token")
  }
  getUser(): Observable<EmployeeViewModel> {
    let user = JSON.parse(localStorage.getItem("User"))
    this.User.next(user);
    return this.User.asObservable();
  }

  removeToken() {
    localStorage.removeItem("access_token");
  }
  isAuthenticated() {
    const token = localStorage.getItem("access_token");
    const tokenExpired = this.jwtHelper.isTokenExpired(token)
    this.authenticated.next(!tokenExpired);
    return this.authenticated.asObservable();
  }
  logout() {
    this.removeToken();
    this.removeMenuItems();
    this.authenticated.next(false);
    this.router.navigate(['/login']);

  }
  removeMenuItems() {
    localStorage.removeItem("top_nav_menu_items");
  }
}
