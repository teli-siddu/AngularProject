import { Injectable } from '@angular/core';
import { LoginViewModel } from 'src/app/models/login-view-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReturnResult } from 'src/app/models/ret-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  async loginAsync(loginViewModel: LoginViewModel): Promise<ReturnResult> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'jwt-token'
      })
    };

    let retResult = await this.httpClient.post<ReturnResult>(`${this.baseUrl}/api/Account/SignIn`, loginViewModel, httpOptions).toPromise()
    // console.log(retResult)
    return retResult;

  }
}


