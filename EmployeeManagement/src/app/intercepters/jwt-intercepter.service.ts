import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtIntercepterService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
    console.log("jwt intercept");
    // alert();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let isAuthenticated: boolean;
    this.authenticationService.isAuthenticated().subscribe(result => {
      isAuthenticated = result;
    });
    const token: string = this.authenticationService.getToken();
    // alert(token)
    if (isAuthenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    return next.handle(request);
  }

}
